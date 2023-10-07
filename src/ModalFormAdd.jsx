import { Modal, Input, Form, Select } from "antd";

function ModalFormAdd({
  showModalAdd,
  handleAddRecord,
  setShowModalAdd,
  setFormDataAdd,
  formDataAdd,
  setShowErrorAddLen,
  showErrorAddLen,
  setShowErrorAddStatus,
  showErrorAddStatus,
}) {
  const { Option } = Select;
  return (
    <Modal
      title={"Yeni əlavə et"}
      open={showModalAdd}
      onCancel={() => {
        setShowModalAdd(false);
        setShowErrorAddLen(false);
        setShowErrorAddStatus(false);
      }}
      onOk={handleAddRecord}
    >
      <Form layout="vertical">
        <Form.Item
          label="Len"
          validateStatus={showErrorAddLen ? "error" : ""}
          help={
            showErrorAddLen
              ? "Zəhmət olmasa, Len sahəsini düzgün formatda doldurun"
              : ""
          }
        >
          <Input
            value={formDataAdd.len}
            onChange={(e) => {
              setShowErrorAddLen(false);
              setFormDataAdd({ ...formDataAdd, len: e.target.value });
            }}
          />
        </Form.Item>
        <Form.Item
          label="Status"
          validateStatus={showErrorAddStatus ? "error" : ""}
          help={showErrorAddStatus ? "Zəhmət olmasa, Status Seçin" : ""}
        >
          <Select
            value={formDataAdd.status}
            onChange={(value) => {
              setShowErrorAddStatus(false);
              setFormDataAdd({ ...formDataAdd, status: value });
            }}
          >
            <Option value={0}>0</Option>
            <Option value={1}>1</Option>
            <Option value={2}>2</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ModalFormAdd;
