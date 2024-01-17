import { RiCheckboxCircleLine } from '@remixicon/react';
import { ToolButton } from './ToolButton';

export interface SuccessButtonProps {
  locale?: Record<string, string> | undefined;
}

export function SuccessButton({ locale }: SuccessButtonProps) {
  return (
    <ToolButton color="success" icon={<RiCheckboxCircleLine />}>
      {locale?.['success'] || 'Success'}
    </ToolButton>
  );
}
