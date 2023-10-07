import { Modal, Input, Form, Select } from "antd";

function ModalFormEdit({
  showModalEdit,
  editRecord,
  setShowModalEdit,
  setFormDataEdit,
  formDataEdit,
  setShowEditErrorLen,
  showErrorEditLen,
  setShowErrorEditStatus,
  showErrorEditStatus,
}) {
  const { Option } = Select;
  return (
    <Modal
      title={"Yenilə"}
      open={showModalEdit}
      onCancel={() => {
        setShowModalEdit(false);
        setShowEditErrorLen(false);
        setShowErrorEditStatus(false);
      }}
      onOk={editRecord}
    >
      <Form layout="vertical">
        <Form.Item
          label="Len"
          validateStatus={showErrorEditLen ? "error" : ""}
          help={
            showErrorEditLen
              ? "Zəhmət olmasa, Len sahəsini düzgün formatda doldurun"
              : ""
          }
        >
          <Input
            value={formDataEdit.len}
            onChange={(e) => {
              setShowEditErrorLen(false);
              setFormDataEdit({ ...formDataEdit, len: e.target.value });
            }}
          />
        </Form.Item>
        <Form.Item
          label="Status"
          validateStatus={showErrorEditStatus ? "error" : ""}
          help={showErrorEditStatus ? "Zəhmət olmasa, Status Seçin" : ""}
        >
          <Select
            value={formDataEdit.status}
            onChange={(value) => {
              setShowErrorEditStatus(false);
              setFormDataEdit({ ...formDataEdit, status: value });
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

export default ModalFormEdit;
