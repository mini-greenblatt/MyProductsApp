import { FC, PropsWithChildren } from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { spacing } from '../theme/spacing';

type Props = {
  onPress?: () => void;//card is component that shared to category and product, in product not need onPress event so it optional
  image: string;
};

const Card: FC<PropsWithChildren<Props>> = ({ children, onPress, image }) => {
  const content = (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.contentContainer}>{children}</View>
    </View>
  );

  return (
    <>
      {onPress ? (
        <TouchableOpacity onPress={onPress}>{content}</TouchableOpacity>
      ) : (
        content
      )}
    </>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: spacing.sm,
    borderRadius: spacing.sm,
    marginBottom: spacing.sm,
    flexDirection: 'row',
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    maxWidth: '65%',
  },
  image: {
    width: 90,
    height: 90,
  },
});
