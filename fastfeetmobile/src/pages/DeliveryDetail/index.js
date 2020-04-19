import React, {Component} from 'react';

import {TouchableOpacity, Text, View, Button} from 'react-native';
import AsyncStorange from '@react-native-community/async-storage';
import moment from 'moment';
import IconFeather from 'react-native-vector-icons/Feather';

import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
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
import styled from 'styled-components';

export default class DeliveryDetail extends Component {
  static navigationOptions = ({navigation}) => ({
    IdDelivery: navigation.getParam('deliveryId'),
  });

  state = {
    userId: '',
    delivery: {},
    deliveryId: '',
    recipient: '',
    error: '',
  };

  async componentDidMount() {
    const idUser = await AsyncStorange.getItem('@fastfeet:idUser');
    const {navigation} = this.props;
    this.setState({
      deliveryId: navigation.getParam('deliveryId'),
      userId: idUser,
    });
    console.log('Id Delivery: ' + this.state.deliveryId);

    if (this.state.deliveryId !== undefined) {
      console.log('Buscado Delivery ' + this.state.deliveryId);

      const response = await api.get(`delivery/show/${this.state.deliveryId}`);
      console.log(response.data);
      if (response.data !== undefined) {
        this.setState({
          delivery: response.data,
        });
        if (response.data.recipient !== undefined) {
          this.setState({
            recipient: response.data.recipient,
          });
        }
      }
    } else {
      //Não foi possivel buscar a encomenda
      navigation.navigate('Delivery');
    }
  }

  voltar = async () => {
    const {navigation} = this.props;
    navigation.navigate('Delivery');
  };

  retirarEncomenda = async () => {
    const response = await api.get(
      `delivery/withdrawal/${this.state.deliveryId}/deliveryman/${this.state.userId}`,
    );
    if ((response.data !== undefined) & response.data.Withdrawal) {
      const responseDelivery = await api.get(
        `delivery/show/${this.state.deliveryId}`,
      );

      this.setState({
        delivery: responseDelivery.data,
      });
    } else {
      this.setState({
        error: response.data.Withdrawal,
      });
      console.log(response.data.Withdrawal);
    }
    console.log(this.state.error);
  };

  infoProblem = async () => {
    const {navigation} = this.props;
    const {deliveryId} = this.state;
    navigation.navigate('CadProblems', {deliveryId});
  };

  viewProblems = async () => {
    const {navigation} = this.props;
    const {deliveryId} = this.state;
    navigation.navigate('Problems', {deliveryId});
  };

  render() {
    const {delivery, error} = this.state;
    const {recipient} = this.state;

    let startDate = null;
    if (delivery.startDate !== null) {
      startDate = moment(delivery.startDate).format('DD/MM/YYYY');
    }

    let endDate = null;
    if (delivery.endDate !== null) {
      endDate = moment(delivery.endDate).format('DD/MM/YYYY');
    }

    return (
      <Container>
        <Header>
          <TouchableOpacity style={{width: '25%'}} onPress={this.voltar}>
            <IconMaterial
              style={{marginLeft: 10, width: '25%', marginTop: 10}}
              name="chevron-left"
              color="#ffff"
              size={20}></IconMaterial>
          </TouchableOpacity>
          <Title>Detalhes da encomenda</Title>
        </Header>
        <VIEWDETALHES>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <IconMaterial
              name="truck"
              size={19}
              color="#7d40e7"
              style={{width: '8%', marginLeft: 5}}
            />
            <Text style={{fontWeight: 'bold', color: '#7d40e7'}}>
              Informações da entrega
            </Text>
          </View>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#CDC9C9',
              marginLeft: 5,
              marginTop: 5,
            }}>
            DESTINATÁRIO
          </Text>
          <Text style={{fontWeight: 'bold', color: '#CDC9C9', marginLeft: 5}}>
            {recipient.name}
          </Text>

          <Text
            style={{
              fontWeight: 'bold',
              color: '#CDC9C9',
              marginLeft: 5,
              marginTop: 5,
            }}>
            ENDEREÇO DA ENTREGA
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 13,
              color: '#CDC9C9',
              marginLeft: 5,
            }}>
            {recipient.rua}, {recipient.numero}, {recipient.cidade} -{' '}
            {recipient.estado} - {recipient.cep}
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#CDC9C9',
              marginLeft: 5,
              marginTop: 5,
            }}>
            PRODUTO
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 13,
              color: '#CDC9C9',
              marginLeft: 5,
            }}>
            {delivery.product}
          </Text>
        </VIEWDETALHES>
        <VIEWSTATUS>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <IconMaterial
              name="calendar"
              size={19}
              color="#7d40e7"
              style={{width: '8%', marginLeft: 5}}
            />
            <Text style={{fontWeight: 'bold', color: '#7d40e7'}}>
              Situação da entrega
            </Text>
          </View>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#CDC9C9',
              marginLeft: 5,
              marginTop: 5,
              fontSize: 15,
            }}>
            STATUS
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#CDC9C9',
              marginLeft: 5,
            }}>
            {delivery.statusLiteral}
          </Text>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#CDC9C9',
                marginLeft: 5,
                marginTop: 5,
                width: '50%',
              }}>
              DATA DE RETIRADA
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#CDC9C9',
                marginLeft: 5,
                marginTop: 5,
              }}>
              DATA DE ENTREGA
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 0}}>
            {startDate ? (
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#CDC9C9',
                  marginLeft: 5,
                  marginTop: 5,
                  width: '50%',
                  fontSize: 17,
                }}>
                {startDate}
              </Text>
            ) : (
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#CDC9C9',
                  marginLeft: 5,
                  marginTop: 5,
                  width: '50%',
                  fontSize: 20,
                }}>
                --/--/--
              </Text>
            )}
            {endDate ? (
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#CDC9C9',
                  marginLeft: 5,
                  marginTop: 5,
                  width: '50%',
                  fontSize: 17,
                }}>
                {endDate}
              </Text>
            ) : (
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#CDC9C9',
                  marginLeft: 5,
                  marginTop: 5,
                  width: '50%',
                  fontSize: 20,
                }}>
                --/--/--
              </Text>
            )}
          </View>
        </VIEWSTATUS>
        {delivery.statusLiteral === 'Retirada' ? (
          <VIEWBOTTONS>
            <TouchableOpacity
              styled={{alignItems: 'center', width: '100%'}}
              onPress={() => this.infoProblem()}>
              <VIEWBUTON style={{alignItems: 'center', width: '100%'}}>
                <IconFeather
                  name="x-circle"
                  size={25}
                  color="#eb7e80"
                  style={{marginTop: 10}}></IconFeather>
                <Text
                  style={{
                    color: '#CDC9C9',
                    marginLeft: 20,
                    width: '60%',
                    fontSize: 13,
                    alignSelf: 'center',
                  }}>
                  {' Informar Problema'}
                </Text>
              </VIEWBUTON>
            </TouchableOpacity>
            <TouchableOpacity
              styled={{alignItems: 'center', width: '100%'}}
              onPress={() => this.viewProblems()}>
              <VIEWBUTON style={{alignItems: 'center', width: '100%'}}>
                <IconFeather
                  name="info"
                  size={25}
                  color="#edd492"
                  style={{marginTop: 10}}></IconFeather>
                <Text
                  style={{
                    color: '#CDC9C9',
                    marginLeft: 5,
                    width: '60%',
                    fontSize: 13,
                    alignSelf: 'center',
                  }}>
                  {' Visualizar Problemas'}
                </Text>
              </VIEWBUTON>
            </TouchableOpacity>
            <VIEWBUTON style={{alignItems: 'center'}}>
              <IconMaterial
                name="check-circle-outline"
                size={25}
                color="#7d40e7"
                style={{marginTop: 10}}></IconMaterial>
              <Text
                style={{
                  color: '#CDC9C9',
                  marginLeft: 10,
                  width: '60%',
                  fontSize: 13,
                  alignSelf: 'center',
                }}>
                {'Confirmar'}
              </Text>
              <Text
                style={{
                  color: '#CDC9C9',
                  marginLeft: 15,
                  width: '60%',
                  fontSize: 13,
                  alignSelf: 'center',
                }}>
                {'Entrega'}
              </Text>
            </VIEWBUTON>
          </VIEWBOTTONS>
        ) : (
          <View></View>
        )}
        {delivery.statusLiteral === 'Pendente' ? (
          <TouchableOpacity onPress={() => this.retirarEncomenda()}>
            <VIEWBOTTONS
              style={{
                alignItems: 'center',
                width: '33.3%',
                height: '40%',
              }}>
              <VIEWBUTON style={{alignItems: 'center', width: '100%'}}>
                <IconMaterial
                  name="alarm-check"
                  size={25}
                  color="#7d40e7"
                  style={{marginTop: 10}}></IconMaterial>
                <Text
                  style={{
                    color: '#CDC9C9',
                    // marginLeft: 5,
                    width: '70%',
                    fontSize: 13,
                    alignSelf: 'center',
                  }}>
                  {'     Retirar Encomenda'}
                </Text>
              </VIEWBUTON>
            </VIEWBOTTONS>
          </TouchableOpacity>
        ) : (
          <View></View>
        )}
        {delivery.statusLiteral === 'Entregue' ? (
          <VIEWBOTTONS style={{alignItems: 'center', width: '33%'}}>
            <VIEWBUTON style={{alignItems: 'center', width: '100%'}}>
              <IconFeather
                name="info"
                size={25}
                color="#edd492"
                style={{marginTop: 10}}></IconFeather>
              <Text
                style={{
                  color: '#CDC9C9',
                  marginLeft: 20,
                  width: '70%',
                  fontSize: 13,
                  alignSelf: 'center',
                }}>
                {'   Visualizar Problemas'}
              </Text>
            </VIEWBUTON>
          </VIEWBOTTONS>
        ) : (
          <View></View>
        )}
        {error !== '' ? (
          <View
            style={{
              height: '20%',
              width: '80%',
              backgroundColor: '#ffff',
              borderStyle: 'solid',
              borderColor: '#7d40e7',
              borderWidth: 2,
              position: 'absolute',
              marginTop: '40%',
              alignItems: 'center',
            }}>
            <IconFeather
              name="x-circle"
              size={40}
              color="#eb7e80"
              style={{marginTop: 20}}></IconFeather>
            <Text style={{marginTop: 6}}>{error}</Text>
            <View
              style={{
                backgroundColor: '#ffff',
                borderColor: '#7d40e7',
                borderStyle: 'solid',
                borderWidth: 3,
                marginTop: 5,
                width: '20%',
                height: '20%',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    error: '',
                  })
                }>
                <Text style={{color: '#7d40e7', fontWeight: 'bold'}}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={{display: 'none'}}></View>
        )}
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
