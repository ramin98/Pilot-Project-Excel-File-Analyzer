import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { Modal } from "antd";

function Diagrams({
  showPieChart,
  showBarChart,
  dataPieChart,
  dataBarChart,
  setShowBarChart,
  setShowPieChart,
}) {
  return (
    <div className="diagrams">
      <Modal
        title="Pie Chart Analysis"
        open={showPieChart}
        onCancel={() => setShowPieChart(false)}
        footer={null}
        width={450}
      >
        <PieChart width={400} height={400}>
          <Pie
            data={dataPieChart}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name}: ${percent}%`}
          >
            <Cell key={`cell-0`} fill="#82ca9d" />
            <Cell key={`cell-1`} fill="#8884d8" />
            <Cell key={`cell-2`} fill="#ffc658" />
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </Modal>

      <Modal
        title="Bar Chart Analysis"
        open={showBarChart}
        onCancel={() => setShowBarChart(false)}
        footer={null}
        width={650}
      >
        <BarChart
          width={600}
          height={300}
          data={dataBarChart}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="status" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sum" fill="#8884d8" />
        </BarChart>
      </Modal>
    </div>
  );
}

export default Diagrams;
