import React, {useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ListItem from './components/ListItem';
import Input from './components/Input';

//Redux
import { connect } from 'react-redux';
import { complete, submit } from './redux/reducers/todos';

const MiApp = ({data, complete, submit})=> {
  const [value, setValue] = useState('');
  const handleChange = (valor) => {
    setValue(valor);
  }
  const handleSubmit = ()=> {
    submit(value)
    setValue('');
  }
    return (
      <View style={styles.container}>
        <Input onSubmit={handleSubmit} onChange={handleChange} value={value}/>
        <FlatList
          style = {styles.list}
          data = {data}
          keyExtractor = {item => String(item.id)}
          renderItem = {({item}) =>
            <ListItem completed={item.completed} onPress={()=>complete(item.id)} description = {item.description} />
          }
        />
      </View>
    )
}
const mapStateToProps = state => {
  return { data: state.todos}
}
const mapDispatchToProps = dispatch => ({
  complete: (id) => dispatch(complete(id)),
  submit: (valor) => dispatch(submit(valor)),
})
const styles = StyleSheet.create({
    container: {
      marginTop:50,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    list: {
      alignSelf:'stretch',
    }
});

export default connect (mapStateToProps, mapDispatchToProps)(MiApp);