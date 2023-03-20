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
  marginLeft: "auto",
  marginBottom: "$4",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

export const BookDetailsWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  background: "$gray700",
  padding: "$6 $8",
  borderRadius: "$md",
})

export const BookDetailsContainer = styled("div", {
  display: "flex",
  gap: "$8",
})

export const BookImage = styled(Image, {
  borderRadius: "$md",
  objectFit: "cover",
  minWidth: 171
})

export const BookContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"
})

export const BookInfos = styled("div", {
  marginTop: 40,
  paddingTop: 24,
  borderTop: "1px solid $gray600",
  display: "flex",
  gap: 60
})