import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background-color: #ffff;

  button: {
    backgroundColor: #ff3030,
    borderRadius: 50,
    height: 44,
    marginTop: metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
  }
`;

export const VIEWNAME = styled.View`
  flex-direction: column;
  margin-left: 10px;
  width: 40%;
`;

export const Header = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eeee;
  width: 100%;
`;
export const VIEWEXIT = styled.View`
  flex-direction: row;
  margin-top: 30px;
  margin-left: 100px;
  width: 20%;
`;

export const AvatarFoto = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 50;
`;

export const Name = styled.Text`
  display: flex;
  font-size: 20px;
  color: black;
  font-weight: bold;
  margin-top: 5px;
  margin-left: 5px;
`;

export const Welcome = styled.Text`
  display: flex;
  font-size: 12px;
  color: gray;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 5px;
`;

export const Data = styled.Text`
  font-size: 10px;
  color: #f34;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`;

export const Repos = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Repositorio = styled.Text`
  font-size: 10px;
  color: #eee;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
`;

export const VIEWTITLE = styled.View`
  flex-direction: row;
  margin-top: 2px;
`;

export const TITLE = styled.Text`
  font-weight: bold;
  font-size: 20px;
  width: 60%;
`;

export const ButtonEntregues = styled.Text`
  /* width: 20%; */
  margin-top: 5px;
  color: #c8c8c8;
  font-weight: bold;
  margin-left: 4px;
`;
export const ButtonPendentes = styled.Text`
  /* width: 20%; */
  color: #be9ff3;
  text-decoration: underline;
  margin-top: 5px;
  font-weight: bold;
`;
export const Linha = styled.View`
  background-color: #f8f9fd;
  margin-top: 10px;
`;
export const LinhaIn = styled.View`
  background-color: #ffff;
  margin: 3px;
`;

export const VIEWTITLEITEM = styled.View`
  flex-direction: row;
  margin-top: 10px;
  margin-left: 10px;
`;
export const TITLEITEM = styled.Text`
  flex-direction: row;
  margin-left: 5px;
  font-weight: bold;
  color: #7d40e7;
  font-size: 15px;
`;

export const VIEWSTATUSITEM = styled.View`
  flex-direction: row;
  margin-top: 20px;
  width: 100%;
`;

export const VIEWDETALHES = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;

export const STEP = styled.View`
  align-items: center;
  height: 1px;
  width: 1px;
`;
