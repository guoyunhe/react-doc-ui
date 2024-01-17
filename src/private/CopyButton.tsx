import { RiFileCopy2Line } from '@remixicon/react';
import { useEffect, useState } from 'react';
import { SuccessButton } from './SuccessButton';
import { ToolButton } from './ToolButton';

export interface CopyButtonProps {
  code?: string | undefined;
  locale?: Record<string, string>;
}

export function CopyButton({ code, locale }: CopyButtonProps) {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    let timer = 0;
    if (success) {
      timer = window.setTimeout(() => {
        setSuccess(false);
      }, 1500);
    }
    return () => {
      window.clearTimeout(timer);
    };
  }, [success]);

  if (success) {
    return <SuccessButton locale={locale} />;
  }

  return (
    <ToolButton
      onClick={() => {
        navigator.clipboard
          .writeText(code || '')
          .then(() => {
            setSuccess(true);
          })
          .catch();
      }}
    >
      <RiFileCopy2Line />
      {locale?.['copy'] || 'Copy'}
    </ToolButton>
  );
}
