import React, {Component} from 'react';

import {TouchableOpacity, Text, View} from 'react-native';
import AsyncStorange from '@react-native-community/async-storage';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import AvatarText from './../../components/AvatarNome';
import api from '../../services/api';

import {
  Header,
  Container,
  Name,
  VIEWTITLE,
  Repos,
  Repositorio,
  Linha,
  TITLE,
  Welcome,
  VIEWNAME,
  VIEWEXIT,
  AvatarFoto,
  ButtonEntregues,
  ButtonPendentes,
  VIEWDETALHES,
  VIEWTITLEITEM,
  VIEWSTATUSITEM,
  LinhaIn,
  TITLEITEM,
  STEP,
} from './styles';

// import { Container } from './styles';

export default class Delivery extends Component {
  static navigationOptions = ({navigation}) => ({
    idUser: navigation.getParam('idUser'),
    userParam: navigation.getParam('responseUser'),
  });

  state = {
    deliveryes: [],
    user: '',
    url: '',
    sigla: '',
  };

  voltar = async () => {
    console.log('Voltando');
    await AsyncStorange.removeItem('@fastfeet:idUser');
    const {navigation} = this.props;
    navigation.navigate('Login');
  };

  getCaractersStart = async (name) => {
    console.log('Obterndo sigla' + name);
    let text = name.toString();
    text = name.substr(0, 2);
    this.setState({
      sigla: text,
    });
  };

  async componentDidMount() {
    const idUser = await AsyncStorange.getItem('@fastfeet:idUser');
    console.log('buscando Encomendas');
    const {navigation} = this.props;
    const response = await api.get(`deliveryMan/${idUser}/deliveries`);
    this.setState({
      deliveryes: response.data.response,
    });
    if (navigation.getParam('responseUser') === undefined) {
      const response2 = await api.get(`/deliveryMan/show/${idUser}`);
      console.log('buscando dados usuario');
      this.setState({
        user: response2.data,
      });

      if (response2.data.avatarid != null) {
        this.setState({
          url: response2.data.avatarid.url,
        });
      }

      await this.getCaractersStart(response2.data.name);
    } else {
      this.setState({
        user: navigation.getParam('responseUser'),
      });

      if (navigation.getParam('responseUser').avatarid.url != null) {
        this.setState({
          url: navigation.getParam('responseUser').avatarid.url,
        });
      }

      await this.getCaractersStart(navigation.getParam('responseUser').name);
    }

    console.log('--------------------------------');
    console.log(this.state.deliveryes);
    console.log('--------------------------------');
    console.log(this.state.user);
    console.log('--------------------------------');
  }

  render() {
    const {deliveryes} = this.state;
    const {user} = this.state;
    const {url} = this.state;
    const {sigla} = this.state;

    const create_at = moment(user.createdAt).format('DD-MM-YYYY hh:mm:ss');
    const updated_at = moment(user.updatedAt).format('DD-MM-YYYY hh:mm:ss');
    return (
      <Container>
        <Header>
          {url ? (
            <AvatarFoto source={{uri: url}} />
          ) : (
            <AvatarText text={sigla} />
          )}

          <VIEWNAME>
            <Welcome>Bem vindo,</Welcome>
            <Name>{user.name}</Name>
          </VIEWNAME>
          <VIEWEXIT>
            <TouchableOpacity onPress={this.voltar}>
              <IconMaterial name="exit-to-app" color="red" size={19} />
            </TouchableOpacity>
          </VIEWEXIT>
        </Header>
        <VIEWTITLE>
          <TITLE>Entregas</TITLE>
          <TouchableOpacity>
            <ButtonPendentes>Pendentes</ButtonPendentes>
          </TouchableOpacity>
          <TouchableOpacity>
            <ButtonEntregues>Entregues</ButtonEntregues>
          </TouchableOpacity>
        </VIEWTITLE>

        <Repos
          data={deliveryes}
          keyExtractor={(repo) => String(repo.id)}
          renderItem={({item}) => (
            <Linha>
              <LinhaIn>
                <VIEWTITLEITEM>
                  <Icon name="truck" size={19} color="#7d40e7" />
                  <TITLEITEM>Encomenda {item.id}</TITLEITEM>
                </VIEWTITLEITEM>
                <VIEWSTATUSITEM>
                  <ProgressSteps
                    activeStep={item.statusNumber}
                    // progressBarColor="#7d40e7"
                    disabledStepIconColor="#be9ff3"
                    disabledStepNumColor="#be9ff3"
                    activeStepIconBorderColor="#7d40e7"
                    completedStepIconColor="#7d40e7"
                    completedProgressBarColor="#7d40e7"
                    activeStepIconColor="#7d40e7"
                    completedCheckColor="#7d40e7"
                    activeStepNumColor="#7d40e7"
                    activeLabelColor="#7d40e7">
                    <ProgressStep label="Aguardando Retirada" removeBtnRow>
                      <STEP></STEP>
                    </ProgressStep>
                    <ProgressStep label="Retirada" removeBtnRow>
                      <View
                        style={{
                          alignItems: 'center',
                          width: '4px',
                          height: '4px',
                        }}></View>
                    </ProgressStep>
                    <ProgressStep label="Entregue" removeBtnRow>
                      <View style={{alignItems: 'center'}}></View>
                    </ProgressStep>
                  </ProgressSteps>
                </VIEWSTATUSITEM>
              </LinhaIn>
              <VIEWDETALHES></VIEWDETALHES>
            </Linha>
          )}
        />
      </Container>
    );
  }
}
