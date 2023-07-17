import type { TextInputProps } from 'react-native';

export interface InputMessageFieldProps extends TextInputProps {
  /** Input 상단 텍스트 */
  label?: string;

  /** Input 가로 길이 */
  width?: number | string;

  /** Input 하단 텍스트 */
  supportingText?: string;

  /** Input의 value */
  value: string;

  /** 비활성화 여부 */
  disabled?: boolean;

  /** 변경은 불가능하지만 value가 강조된 상태 */
  disableAccent?: boolean;

  /** 필수 * 표시 추가 여부 */
  required?: boolean;

  /** 에러 여부 */
  hasError?: boolean;

  /** 키보드로 값 변경 가능 여부 */
  editable?: boolean;

  /** editable false일 경우, 필드 포커스 여부 */
  focused?: boolean;

  /** Input 상단 텍스트 옆 툴팁 */
  tooltip?: React.ReactElement;

  /** Input value 최대 길이 */
  maxLength?: number;
  
  onInput: (input: string) => void;
}

export interface GetInputStatusColorProps {
  disabled?: boolean;
  disableAccent?: boolean;
  hasError?: boolean;
  isFocused?: boolean;
}
