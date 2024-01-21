import {
  RiMacbookLine,
  RiSmartphoneLine,
  RiTabletLine,
} from '@remixicon/react';
import cn from 'classnames';
import { CSSProperties, useMemo, useState } from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import { CopyButton } from './CopyButton';
import './DemoBlock.css';
import { FileName } from './FileName';
import { Spacer } from './Spacer';
import { Toolbar } from './Toobar';
import { ToolButton } from './ToolButton';
import { ToolSelect } from './ToolSelect';
import { transformCode } from './transformCode';

export interface DemoBlockProps {
  device?: 'laptop' | 'tablet' | 'mobile' | 'responsive';
  language?: 'jsx' | 'tsx';
  filename?: string | undefined;
  code: string;
  disablePadding?: boolean;
  className?: string;
  style?: CSSProperties;
  imports?: Record<string, any>;
}

export function DemoBlock({
  code,
  filename,
  language = 'jsx',
  device = 'responsive',
  disablePadding,
  className,
  style,
  imports,
}: DemoBlockProps) {
  const deviceList = useMemo(
    () => [
      { value: 'mobile', label: 'Mobile', icon: <RiSmartphoneLine /> },
      { value: 'tablet', label: 'Tablet', icon: <RiTabletLine /> },
      { value: 'laptop', label: 'Laptop', icon: <RiMacbookLine /> },
    ],
    [],
  );

  const [selectedDevice, setSelectedDevice] = useState<string>(
    device === 'responsive' ? 'laptop' : device,
  );

  const selectedDeviceObj = useMemo(
    () => deviceList.find((item) => item.value === selectedDevice),
    [selectedDevice, deviceList],
  );

  return (
    <div
      className={cn(
        'doc-ui-demo-block',
        'doc-ui-demo-block-' + selectedDevice,
        className,
      )}
      style={style}
    >
      <Toolbar>
        <FileName language={language} filename={filename} />
        <Spacer />
        {device === 'responsive' ? (
          <ToolSelect
            value={selectedDevice}
            onChange={setSelectedDevice}
            options={deviceList}
          />
        ) : (
          <ToolButton icon={selectedDeviceObj?.icon}>
            {selectedDeviceObj?.label}
          </ToolButton>
        )}
        <CopyButton code={code} />
      </Toolbar>
      <LiveProvider
        code={code}
        // disable the built-in theme of react-prism-renderer
        theme={{ plain: {}, styles: [] }}
        enableTypeScript={language === 'tsx'}
        transformCode={transformCode}
        scope={imports}
        noInline={code?.includes('render(')}
      >
        <div className="doc-ui-demo-block-main">
          <LivePreview
            className={cn(
              'doc-ui-demo-block-preview',
              disablePadding && 'doc-ui-demo-block-preview-disable-padding',
            )}
          />
          <div className="doc-ui-demo-block-develop">
            <LiveError className="doc-ui-demo-block-error" />
            <LiveEditor className="doc-ui-demo-block-editor" />
          </div>
        </div>
      </LiveProvider>
    </div>
  );
}
