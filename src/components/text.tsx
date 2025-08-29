import { Text as RNText, StyleSheet, TextProps } from 'react-native';
import { typography } from '../theme/typography';
import { spacing } from '../theme/spacing';
export type TextVariant = 'header' | 'title'|'subTitle' | 'body'|'description';

interface Props extends TextProps {
  variant?: TextVariant;
  children: React.ReactNode;
}

const variantStyles = StyleSheet.create({
    header: {
      ...typography.header,
    },
   title: {
      ...typography.title,
    },
    subTitle: {
      ...typography.subTitle,
    },
    body: {
      ...typography.body,
    },
    description: {
      ...typography.description,
    },
  });
  
// core component for text 
export const Text = ({ variant = 'body', style={paddingVertical:spacing.xs}, children, ...rest }: Props) => {
  return (
    <RNText style={[variantStyles[variant], style]} {...rest}>
      {children}
    </RNText>
  );
};
