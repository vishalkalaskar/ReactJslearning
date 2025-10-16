import React, { useState } from 'react';
import { Button, message, Steps, theme } from 'antd';

const steps = [
  {
    title: 'Select Beneficiary',
    content: 'Select Beneficiary-content',
  },
  {
    title: ' Add Details',
    content: 'Second-content',
  },
  {
    title: 'Review Beneficiary',
    content: 'Last-content',
  },
  {
    title: 'Select Allocation',
    content: 'Last-content',
  },
  {
    title: ' Review Designation',
    content: 'Last-content',
  },
];

const Step = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    if (current === 0) {
      window.history.back();
    } else {
      setCurrent(current - 1);
    }
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle = {
    lineHeight: '260px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div style={{ marginTop: 24 }}>
        <Button style={{ marginRight: 8 }} onClick={() => prev()}>
          {current === 0 ? 'Back' : 'Previous'}
        </Button>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
      </div>
    </>
  );
};

export default Step;