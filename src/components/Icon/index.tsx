import { ReactElement, useEffect, useState } from 'react';
interface IconProps {
   name: string;
   stroke?: string;
   style?: React.CSSProperties;
   fill?: string;
   width?: number | string;
   height?: number | string;
}

const Icon = ({ name, stroke, width, height, style, fill }: IconProps): ReactElement | null => {
   const [svgContent, setSvgContent] = useState<string>('');

   useEffect(() => {
      const fetchSvg = async (): Promise<void> => {
         try {
            const response = await fetch(`/icons/${name}.svg`);
            const svgText = await response.text();
            setSvgContent(svgText);
         } catch (error) {
            console.error('Error fetching SVG:', error);
         }
      };

      fetchSvg();
   }, [name]);

   if (svgContent === '') {
      return null; // Return null or a fallback component while the SVG is being fetched
   }

   const modifiedSvg = svgContent
      .replace(/fill="[^"]*"/g, fill ? `fill="${fill}"` : '') // Replace fill attribute if fill prop is provided
      .replace(/stroke="[^"]*"/g, stroke ? `stroke="${stroke}"` : ''); // Replace stroke attribute if stroke prop is provided
   const viewBoxMatch = svgContent.match(/viewBox="([^"]*)"/);
   const viewBox = viewBoxMatch ? viewBoxMatch[1] : '';

   return <svg dangerouslySetInnerHTML={{ __html: modifiedSvg }} style={style} width={width || '24'} height={height || '24'} viewBox={viewBox} fill={fill || 'currentColor'} stroke={stroke || 'none'} />;
};

export default Icon;
