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
  top: 0,
  right: 0,
  width: 660,
  height: "100%",
  background: "$gray800",
  boxShadow: "-4px 0px 30px 0px #00000080",
  padding: "$6 48px",
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",

  "&::-webkit-scrollbar": {
    width: 6
  },

  "&::-webkit-scrollbar-track": {
    background: "$gray700"
  },

  "&::-webkit-scrollbar-thumb": {
    background: "$gray600"
  }
})

export const DialogClose = styled(Dialog.Close, {
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