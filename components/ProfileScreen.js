import React from 'react';
import { ScrollView, Image, View, Text, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import { PRIMARY_COLOR } from './../constants/StyleConstants.js';

const styles = {
  statsIconContainer: {
    marginLeft: 40, 
    marginRight: 40, 
    flexDirection: 'row'
  },
  statsIconCount: {
    marginRight:2, 
    fontSize: 30
  }
}

export default class ProfileScreen extends React.Component {  
  
  static navigationOptions = ({ navigation }) => {  
    return {  
      title: 'Feed Details',
      headerStyle: {  
        backgroundColor: PRIMARY_COLOR,  
      },  
      headerTitleStyle: {  
        fontWeight: 'bold',
        color: '#FFFFFF'  
      }  
    };  
  }; 

  render() {
    const feedDetails = this.props.navigation.getParam('feedDetails')
    return (  
      <ScrollView style={{padding: 20}}> 
        <View>
          <Image source={{ uri: feedDetails.image.post}} style = {{height: 200, resizeMode : 'stretch' }} />
        </View>
        <Text style={{marginTop: 10, marginBottom: 20, fontWeight: 'bold'}}>
          { feedDetails.caption }
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={styles.statsIconContainer}>
            <Text style={styles.statsIconCount}>{feedDetails.stats ? feedDetails.stats.star : 0}</Text>
            <Icon name='star' type='font-awesome' color={PRIMARY_COLOR} size={20}/>
          </View>
          <View style={styles.statsIconContainer}>
            <Text style={styles.statsIconCount}>{feedDetails.stats ? feedDetails.stats.follow : 0}</Text>
            <Icon name='user-plus' type='font-awesome' color={PRIMARY_COLOR} size={20}/>
          </View>
          <View style={styles.statsIconContainer}>
            <Text style={styles.statsIconCount}>{feedDetails.stats ? feedDetails.stats.views : 0}</Text>
            <Icon name='eye' type='font-awesome' color={PRIMARY_COLOR} size={20}/>
          </View>
        </View>
        <View style={{justifyContent: "center",alignItems: "center", margin: 20}}>
          <Image source={{ uri: feedDetails.image.profile}} style = {{height: 50, width: 50, resizeMode : 'stretch', borderRadius: 100 }} />
          <Text style={{color: PRIMARY_COLOR}}>{ feedDetails.username }</Text>
        </View>
      </ScrollView>  
    );  
  }

}