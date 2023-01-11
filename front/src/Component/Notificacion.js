import { Alert, Space } from "antd";
import { useEffect, useState } from "react";

const OpenNotification = ({data}) => {
console.log(data);
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
      window.location.reload(true);
    }, 4000);
  }, []);
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      {visible && (
        <Alert
          description={data.message}
          type={data.type} 
          closable
          afterClose={handleClose}
          showIcon
        />
      )}
    </Space>
  );
};
export default OpenNotification;
