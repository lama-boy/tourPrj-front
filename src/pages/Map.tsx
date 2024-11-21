import React, { useEffect, useRef, useState } from 'react';
import topoData from '../assets/json/korea.json';
import * as topojson from 'topojson-client';
import * as d3 from 'd3';

export const MapVisualize = () => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const [name, setName] = useState('');

    useEffect(() => {
        if (svgRef.current) {
            const geoData = topojson.feature(topoData, topoData.objects['korea']).features;
            const zoom = d3.zoom().scaleExtent([0.5, 20]).on('zoom', zoomed);
            const width = svgRef.current.clientWidth;
            const height = svgRef.current.clientHeight;
    
            const svg = d3
                .select(svgRef.current)
                .attr('viewBox', [0, 0, width, height])
                .attr('width', width)
                .attr('height', height)
                .attr('style', 'max-width: 100%; height: auto;')
                .on('click', reset);
    
            const projection = d3
                .geoMercator()
                .center([127.7669, 35.9078])
                .scale(5000)
                .translate([width / 2, height / 2]);
    
            const path = d3.geoPath().projection(projection);
    
            const g = svg.append('g');
    
            const regions = g
                .append('g')
                .selectAll('path')
                .data(geoData)
                .join('path')
                .attr('d', (d: GeoJSON.Feature) => path(d)!);
    
            regions.append('title').text((d: any) => d.properties.name);
        }
    }, []);
    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                backgroundColor: '#e2e2e2',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: "column"
            }}
        >
            <h1>{name}</h1>
            <div
                style={{
                    width: '80%',
                    height: '90%',
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