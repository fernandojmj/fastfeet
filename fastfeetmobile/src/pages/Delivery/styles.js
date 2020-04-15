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
export const Linha = styled.View`
  background-color: #9932cc;
  margin-top: 10px;
  text-align: center;
  border-radius: 50;
`;

export const Button = styled.Button`
  background-color: #ff3030;
  margin-top: 20px;
  text-align: center;
  border-radius: 50;
  color: #ffff;
`;
