import React, { useEffect, useRef, useState } from 'react';
import topoData from '../assets/json/korea.json';
import * as topojson from 'topojson-client';
import * as d3 from 'd3';

export const MapVisualize = () => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const [name, setName] = useState('서울특별시');

    useEffect(() => {
        if (svgRef.current) {
            // 기존 요소 제거
            d3.select(svgRef.current).selectAll('g').remove();

            const geoData = (topojson.feature(
                topoData,
                topoData.objects['korea']
            ) as GeoJSON.FeatureCollection).features;

            const width = svgRef.current.clientWidth;
            const height = svgRef.current.clientHeight;

            const svg = d3
                .select<SVGSVGElement, unknown>(svgRef.current)
                .attr('viewBox', `0 0 ${width} ${height}`)
                .attr('style', 'max-width: 100%; height: 100%;background:white;');

            const projection = d3
                .geoMercator()
                .center([127.66, 35.9078])
                .scale(3000)
                .translate([width / 2, height / 2]);

            const path = d3.geoPath().projection(projection);

            const g = svg.append('g');

            g.selectAll('path')
                .data(geoData, (d: any) => d.properties.name) // 고유 키 설정
                .join(
                    enter => enter.append('path').attr('d', (d: GeoJSON.Feature) => path(d)!),
                    update => update,
                    exit => exit.remove()
                )
                .attr('fill', '#b8d8be')
                .attr('stroke', '#fff')
                .attr('stroke-width', 3)
                .on('click', (event, d: any) => {
                    setName(d.properties.name);
                })
                .append('title')
                .text((d: any) => d.properties.name);
        }
    }, []); // 의존성 배열로 최초 실행 보장

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#e2e2e2',
                display: 'block',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                minHeight: '360px',
            }}
        >
            {/* <h1>{name}</h1> */}
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#acacac',
                }}
            >
                <svg
                    ref={svgRef}
                    style={{
                        width: '100%',
                        height: '100%',
                        border: '1px solid white',
                    }}
                ></svg>
            </div>
        </div>
    );
};
