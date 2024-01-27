import { BiCheckCircle } from 'react-bootstrap-icons-pro';
import { ToolButton } from './ToolButton';

export interface SuccessButtonProps {
  locale?: Record<string, string> | undefined;
}

export function SuccessButton({ locale }: SuccessButtonProps) {
  return (
    <ToolButton color="success" icon={<BiCheckCircle />}>
      {locale?.['success'] || 'Success'}
    </ToolButton>
  );
}
