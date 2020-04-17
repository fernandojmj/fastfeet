import React, {Component} from 'react';

import {TouchableOpacity, Text, View, Button} from 'react-native';
import AsyncStorange from '@react-native-community/async-storage';
import moment from 'moment';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import Delivery from './../Delivery';
import api from '../../services/api';
import {
  Header,
  Container,
  Title,
  VIEWDETALHES,
  VIEWSTATUS,
  VIEWBOTTONS,
  VIEWBUTON,
} from './styles';

export default class DeliveryDetail extends Component {
  static navigationOptions = ({navigation}) => ({
    IdDelivery: navigation.getParam('deliveryId'),
  });

  state = {
    user: '',
    delivery: {},
    deliveryId: '',
  };

  async componentDidMount() {
    const idUser = await AsyncStorange.getItem('@fastfeet:idUser');
    const {navigation} = this.props;
    this.setState({
      deliveryId: navigation.getParam('deliveryId'),
    });
    console.log('Id Delivery: ' + this.state.deliveryId);

    if (this.state.deliveryId !== undefined) {
      console.log('Buscado Delivery ' + this.state.deliveryId);

      const response = await api.get(`delivery/show/${this.state.deliveryId}`);
      console.log(response.data);
      this.setState({
        delivery: response.data,
      });
    } else {
      //Não foi possivel buscar a encomenda
      navigation.navigate('Delivery');
    }
  }

  redirect = async () => {
    const {navigation} = this.props;
    navigation.navigate('Delivery');
  };

  render() {
    const {delivery} = this.state;
    const {statusNumber} = this.state.delivery;

    return (
      <Container>
        <Header>
          <TouchableOpacity style={{width: '25%'}} onPress={this.redirect}>
            <IconMaterial
              style={{marginLeft: 10, width: '25%', marginTop: 10}}
              name="chevron-left"
              color="#ffff"
              size={20}></IconMaterial>
          </TouchableOpacity>
          <Title>Detalhes da encomenda</Title>
        </Header>
        <VIEWDETALHES></VIEWDETALHES>
        <VIEWSTATUS></VIEWSTATUS>
        <VIEWBOTTONS>
          <VIEWBUTON></VIEWBUTON>
          <VIEWBUTON></VIEWBUTON>
          <VIEWBUTON></VIEWBUTON>
        </VIEWBOTTONS>
      </Container>
    );
  }
}

Delivery.navigationOptions = {
  tabBarLabel: 'Entregas',
  tabBarIcon: ({tintColor}) => (
    <IconMaterial name="menu" size={20} color={tintColor} />
  ),
};
