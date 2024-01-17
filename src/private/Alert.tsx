import {
  RiCheckboxCircleLine,
  RiCloseCircleLine,
  RiErrorWarningLine,
  RiInformationLine,
} from '@remixicon/react';
import cn from 'classnames';
import { ReactNode, useMemo } from 'react';
import './Alert.css';

export interface AlertProps {
  type?: 'success' | 'info' | 'warning' | 'error';
  children?: ReactNode;
}

export function Alert({ type = 'info', children }: AlertProps) {
  const icon: ReactNode = useMemo(() => {
    switch (type) {
      case 'error':
        return <RiCloseCircleLine />;
      case 'success':
        return <RiCheckboxCircleLine />;
      case 'warning':
        return <RiErrorWarningLine />;
      default:
        return <RiInformationLine />;
    }
  }, [type]);
  return (
    <div className={cn('doc-ui-alert', 'doc-ui-alert-' + type)}>
      <div className="doc-ui-alert-icon">{icon}</div>
      <div className="doc-ui-alert-main">{children}</div>
    </div>
  );
}
