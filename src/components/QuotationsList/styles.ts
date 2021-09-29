import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
   filters: {
       width: '100%',
       flexDirection: 'row',
       paddingVertical: 15,
       justifyContent: 'space-evenly',
   },
   buttonQuery: {
       width: 50,
       height: 30,
       backgroundColor: '#f50d41',
       borderRadius: 15,
       alignItems: 'center',
       justifyContent: 'center'
   },
   textButtonQuery: {
       color: '#ffffff',
       fontWeight: 'bold',
       fontSize: 14,
   },
   flatlist: {
       width: '100%',
   }
})

export default styles