import { FC } from "react";
import "./RegionFilter.css";

interface RegionFilterProps {
  regions: string[];
  selectedRegion: string;
  onSelectRegion: (region: string) => void;
}

const RegionFilter: FC<RegionFilterProps> = ({
  regions,
  selectedRegion,
  onSelectRegion,
}) => {
  return (
    <div className="region-filter">
      <label htmlFor="region">Filter by Region:</label>
      <select
        id="region"
        value={selectedRegion}
        onChange={(e) => onSelectRegion(e.target.value)}
      >
        <option value="">All Regions</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RegionFilter;
