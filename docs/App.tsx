import readme from '../README.md';
import DocUI from '../src';

export default function App() {
  return <DocUI docs={[readme]} />;
}
