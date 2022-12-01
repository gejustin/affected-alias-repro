import { isNotNull } from '@myorg/common';

const test = isNotNull<string>('hello');

/* eslint-disable-next-line */
export interface UiComponentsProps {}

export function UiComponents(props: UiComponentsProps) {
  return <div>{test && <h1>Welcome to UiComponents!</h1>}</div>;
}

export default UiComponents;
