import React, { useState, useCallback, useEffect, useContext } from "react";

import styled from "styled-components";
import { noop } from "lodash";

import { CommonComponentProps } from "./common";
import EditableTextSubComponent, {
  EditInteractionKind,
  SavingState,
} from "./EditableTextSubComponent";
import { KeyboardContext, KeyboardKeyType } from "pages/Editor/GlobalHotKeys";

export { EditInteractionKind, SavingState };

export type EditableTextProps = CommonComponentProps & {
  defaultValue: string;
  placeholder?: string;
  editInteractionKind: EditInteractionKind;
  savingState: SavingState;
  onBlur?: (value: string) => void;
  onTextChanged?: (value: string) => void;
  valueTransform?: (value: string) => string;
  isEditingDefault?: boolean;
  forceDefault?: boolean;
  updating?: boolean;
  isInvalid?: (value: string) => string | boolean;
  hideEditIcon?: boolean;
  fill?: boolean;
  underline?: boolean;
  isError?: boolean;
  shouldFocusOnF2?: boolean;
};

// Width of the component when the `filled` prop is false
export const UNFILLED_WIDTH = 243;

export const EditableTextWrapper = styled.div<{
  filled: boolean;
}>`
  ${(props) =>
    !props.filled
      ? `
    width: ${UNFILLED_WIDTH}px;
  `
      : `
    width: 100%;
    flex: 1;
  `}
  .error-message {
    margin-left: ${(props) => props.theme.spaces[5]}px;
    color: ${(props) => props.theme.colors.danger.main};
  }
`;

export function EditableText(props: EditableTextProps) {
  const {
    defaultValue,
    isEditingDefault,
    isInvalid: inputValidation,
    savingState: defaultSavingState,
    shouldFocusOnF2,
    ...others
  } = props;
  const [isEditing, setIsEditing] = useState(!!isEditingDefault);
  const [isInvalid, setIsInvalid] = useState<string | boolean>(false);
  const [savingState, setSavingState] = useState<SavingState>(
    SavingState.NOT_STARTED,
  );

  const editMode = useCallback(
    (e: React.MouseEvent) => {
      setIsEditing(true);
      const errorMessage = inputValidation && inputValidation(defaultValue);
      setIsInvalid(errorMessage ? errorMessage : false);
      e.preventDefault();
      e.stopPropagation();
    },
    [inputValidation, defaultValue],
  );

  const nonEditMode = () => {
    if (!isEditing && savingState === SavingState.SUCCESS) {
      setSavingState(SavingState.NOT_STARTED);
    }
  };

  const { registerKeyDownHandler, unregisterKeyDownHandler } = useContext(
    KeyboardContext,
  );

  useEffect(() => {
    if (shouldFocusOnF2) {
      registerKeyDownHandler(KeyboardKeyType.F2, () => {
        setIsEditing(true);
      });

      return () => unregisterKeyDownHandler(KeyboardKeyType.F2);
    }
  }, []);

  return (
    <EditableTextWrapper
      filled={!!props.fill}
      onClick={
        props.editInteractionKind === EditInteractionKind.SINGLE
          ? editMode
          : noop
      }
      onDoubleClick={
        props.editInteractionKind === EditInteractionKind.DOUBLE
          ? editMode
          : noop
      }
      onMouseEnter={nonEditMode}
    >
      <EditableTextSubComponent
        defaultSavingState={defaultSavingState}
        defaultValue={defaultValue}
        inputValidation={inputValidation}
        isEditing={isEditing}
        isEditingDefault={isEditingDefault}
        isInvalid={isInvalid}
        savingState={savingState}
        setIsEditing={setIsEditing}
        setIsInvalid={setIsInvalid}
        setSavingState={setSavingState}
        {...others}
      />
    </EditableTextWrapper>
  );
}

export default EditableText;
