import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  const dataPointValuesArr = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMax = Math.max(...dataPointValuesArr);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label} // assume labels are unique
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
