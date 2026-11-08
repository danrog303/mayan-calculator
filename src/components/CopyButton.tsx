import { useEffect, useState } from 'react';
import Icon from './Icon';

type Props = { text: string; label: string };

type CopyState = 'idle' | 'copied' | 'failed';

const RESET_DELAY_MS = 1800;

export default function CopyButton({ text, label }: Props) {
  const [state, setState] = useState<CopyState>('idle');

  useEffect(() => {
    if (state === 'idle') return;
    const timer = window.setTimeout(() => setState('idle'), RESET_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [state]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setState('copied');
    } catch {
      setState('failed');
    }
  };

  const stateLabels: Record<CopyState, string> = {
    idle: label,
    copied: 'Copied',
    failed: 'Copy failed, select and copy manually',
  };

  return (
    <button type="button" className="button button--secondary button--small" onClick={handleCopy}>
      <Icon name={state === 'copied' ? 'check' : 'copy'} size={16} />
      <span aria-live="polite">{stateLabels[state]}</span>
    </button>
  );
}
