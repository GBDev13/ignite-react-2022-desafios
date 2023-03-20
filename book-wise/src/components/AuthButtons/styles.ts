import { styled } from "../../../stitches.config";

export const Container = styled("section", {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const AuthButton = styled('button', {
  width: '100%',
  height: 72,
  background: "$gray600",
  border: 'none',
  color: '$gray200',
  fontWeight: '$bold',
  fontSize: '$lg',
  borderRadius: 8,
  padding: '0 $6',
  display: 'flex',
  alignItems: 'center',
  gap: '$5',
  transition: '0.2s',

  '&:hover': {
    background: "$gray500",
  }
})