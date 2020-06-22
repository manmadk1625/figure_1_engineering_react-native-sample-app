import React from 'react';
import { ScrollView, View, Text, Button } from 'react-native';
import appService from './../services/appService.js';
import axios from 'axios';
import { Card, ListItem, Image, Icon } from 'react-native-elements';
import { PRIMARY_COLOR } from './../constants/StyleConstants.js';

export default class HomeScreen extends React.Component {  
  
  static navigationOptions = {  
    title: 'Home',  
    headerStyle: {  
      backgroundColor: PRIMARY_COLOR,  
    },  
    headerTitleStyle: {  
      fontWeight: 'bold',
      color: '#FFFFFF'  
    }  
  };

  constructor() {
    super();
    this.state = {
      feed: []
    }
  }

  componentDidMount() {
    appService.getFeed().then(res => this.setState({ feed: res.data.feed }));
  }

  render() { 
    const { feed } = this.state;
    return (  
      <ScrollView style={{marginBottom: 20}}>
        {
          feed.map((f, i) => <View key={i}>
            <Card image={{uri: f.image.post}}>
              <Text style={{marginBottom: 10, fontWeight: 'bold'}}>
                { f.caption }
              </Text>
              <Text style={{marginRight: 10, marginBottom: 10}}>
                <Text style={{fontWeight: 'bold'}}>By:&nbsp;</Text>
                <Text style={{color: PRIMARY_COLOR}}>{ f.username }</Text>
              </Text>
              <Button
                icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='VIEW NOW'
                onPress={() => this.props.navigation.push('Profile', {feedDetails: f})} />
            </Card>
          </View>)
        }
      </ScrollView>  
    );  
  }

}