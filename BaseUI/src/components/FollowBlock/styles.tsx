import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: 'rgb(181, 182, 221)',
  },
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  blockAlt: {
    borderRightWidth: 2,
    borderColor: 'rgb(181, 182, 221)',
  },
  number: {
    fontSize: 30,
    color: '#FFB8C6',
  },
  text: {
    fontSize: 16,
  },
});

export default styles;
