import React from 'react';
import { Icon, Typography, Popover } from 'antd';
import styles from './index.less';
import { connect } from 'dva';
import { FormattedMessage } from 'umi-plugin-react/locale';
import { isAntDesignPro } from '@/utils/utils';

const firstUpperCase = pathString => {
  return pathString
    .replace('.', '')
    .split(/\/|\-/)
    .map(s => s.toLowerCase().replace(/( |^)[a-z]/g, L => L.toUpperCase()))
    .filter(s => s)
    .join('');
}; // when  click block copy, send block url to  ga

const onBlockCopy = label => {
  if (!isAntDesignPro()) {
    return;
  }

  const ga = window && window.ga;

  if (ga) {
    ga('send', 'event', {
      eventCategory: 'block',
      eventAction: 'copy',
      eventLabel: label,
    });
  }
};

const BlockCodeView = ({ url }) => {
  const blockUrl = `npx umi block add ${firstUpperCase(url)}  --path=${url}`;
  return (
    <div className={styles['copy-block-view']}>
      <Typography.Paragraph
        copyable={{
          text: blockUrl,
          onCopy: () => onBlockCopy(url),
        }}
      >
        <code className={styles['copy-block-code']}>{blockUrl}</code>
      </Typography.Paragraph>
    </div>
  );
};

export default connect(({ routing }) => ({
  location: routing.location,
}))(({ location }) => {
  const url = location.pathname;
  return (
    <Popover
      title={<FormattedMessage id="app.preview.down.block" defaultMessage="下载此页面到本地项目" />}
      placement="topLeft"
      content={<BlockCodeView url={url} />}
      trigger="click"
    >
      <div className={styles['copy-block']}>
        <Icon type="download" />
      </div>
    </Popover>
  );
});
