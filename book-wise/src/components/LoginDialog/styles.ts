import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { styled } from '../../../stitches.config';

export const DialogOverlay = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: 0,
  background: "#00000099"
})

export const DialogContent = styled(Dialog.Content, {
  position: 'fixed',
  width: 516,
  background: "$gray700",
  boxShadow: "4px 16px 24px 0px #00000040",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "56px 72px",
  borderRadius: 12,

  "> div": {
    maxWidth: 372,
    margin: "0 auto",
    textAlign: "center"
  }
})

export const DialogClose = styled(Dialog.Close, {
  position: "absolute",
  top: "$4",
  right: "$4",
  color: "$gray400",
  background: "transparent",
  border: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})