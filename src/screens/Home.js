import React, { useState, useEffect } from "react";
import { Dimensions, Keyboard } from "react-native";
import styled from "styled-components/native";
import Text from "../components/Text";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import purchaseData from "../../data";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LineChart } from "react-native-chart-kit";
import converter from "../utils/CurrencyConverter";
import CustomKeyboard from "../components/KeyboardPad";
import Header from '../components/Header';

const Home = ({ navigation }) => {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const [shift, setShift] = useState(true);

  const renderTransactions = ({ item, index }) => {
    return (
      <PurchaseContainer key={index}>
        <PurchaseInfo>
          <Text bolder medium>
            {item.name}
          </Text>
          <Text bold small>{item.address}</Text>
        </PurchaseInfo>
        <Text medium bolder>
          {converter.format(item.amount)}
        </Text>
      </PurchaseContainer>
    );
  };

  const handleFocusedView = () => {
    Keyboard.dismiss();
    setFocused(true);
  };
  
  const clearSearch = () => {
    Keyboard.dismiss();
    setFocused(false);
    setValue("");
  };

  const searchKeypress = (item, index) => {
    var res = "";
    switch (index) {
      case "3, 0":
        return setShift(!shift);
      case "3, 8":
        if (value.length == 1) {setShift(true)}
        return setValue((value) => value.slice(0, -1));
      case "4, 0":
        return clearSearch();
      case "4, 1":
        return setValue((value) => value + " ");
      case "4, 2":
        return setFocused(false);
      default:
        setShift(false)
        return setValue((value) => value + item);
    }
  };

  return (
    <Container>
      <Header nav={navigation}/>
      {!focused ? (
        <>
          <Balance>
            <Text center boldest small>
              Current Balance
            </Text>
            <Text title center bold color="#ffffff9f">
              <FontAwesome name="dollar" size={20} color={"#d8b600"} />{" "}
              10,165.71{" "}
            </Text>
          </Balance>

          <Chart>
            <LineChart
              data={{
                labels: ["May", "June", "July", "Aug", "Sept", "Oct"],

                datasets: [
                  {
                    data: [
                      Math.random() * 10,
                      Math.random() * 10,
                      Math.random() * 10,
                      Math.random() * 13,
                      Math.random() * 14,
                      10.16,
                    ],
                  },
                ],
              }}
              bezier
              withVerticalLines={false}
              withHorizontalLines={false}
              yAxisLabel="$"
              yAxisSuffix="k"
              width={Dimensions.get("window").width - 40}
              height={200}
              chartConfig={{
                backgroundGradientFrom: "#1e1e1e",
                backgroundGradientTo: "#1e1e1e",
                color: (opacity = 1) => `rgba(255, 215, 0, ${opacity})`,
                labelColor: (opacity = 0.2) =>
                  `rgba(255, 255, 255, ${opacity})`,
                strokeWidth: 1,
              }}
              style={{
                marginVertical: 10,
                borderRadius: 16,
              }}
            />
          </Chart>
        </>
      ) : (
        <>
          <Balance >
            <Text center boldest small>
              Current Balance
            </Text>
            <Text small center bold color="#ffffff9f">
              <FontAwesome name="dollar" size={10} color={"#d8b600"} />{" "}
              10,165.71{" "}
            </Text>
          </Balance>
          <CustomKeyboard shiftEnabled={shift} onPress={searchKeypress} />
        </>
      )}
      <TransactionHeader>
        <Text small> Last purchase </Text>
        <TouchableOpacity>
          <MaterialIcons name="sort" size={25} color={"#d8b600"} />
        </TouchableOpacity>
      </TransactionHeader>
      <SearchHeader>
        <IconContainerL>
          <MaterialIcons name="search" size={25} color={"#d8b600"} />
        </IconContainerL>
        <Search
          type="text"
          value={value}
          placeholder="Search transactions"
          placeholderTextColor="#ffffff7f"
          onFocus={handleFocusedView}
          
        />
        {value.length > 0 && (
          <Touch onPress={() => setValue("")}>
            <IconContainerR>
              <MaterialIcons name="clear" size={20} color={"#d8b600"} />
            </IconContainerR>
          </Touch>
        )}
      </SearchHeader>

      {value.length === 0 ? (
        <Transactions
          ListHeaderComponent={<></>}
          keyExtractor={(item, index) => `${item}${index}`}
          data={purchaseData}
          renderItem={renderTransactions}
          showsVerticalScrollIndicator={true}
        />
      ) : (
        <>
          <Transactions
            ListHeaderComponent={<></>}
            keyExtractor={(item, index) => `${item}${index}-filtered`}
            data={purchaseData.filter((data) =>
              data.name.toLowerCase().includes(value.toLowerCase()) || data.address.toLowerCase().includes(value.toLowerCase()) || data.amount.toLowerCase().includes(value.toLowerCase())
            )}
            ListEmptyComponent={
              <Touch onPress={()=> setFocused(false)}>
              <Text large margin="45px auto">
                {" "}
                No results{" "}
              </Text>
              </Touch>
            }
            renderItem={renderTransactions}
            showsVerticalScrollIndicator={true}
          />
        </>
      )}
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1ef5;
`;

const Touch = styled.TouchableOpacity`
  
`;

const Balance = styled.View`
  background-color: #1e1e1e;
  padding: 10px;
  margin: 20px auto;
  border-bottom-end-radius: 20px;
`;

const Chart = styled.View`
  font-family: Avenir;
  margin-left: 20;
`;

const Transactions = styled.FlatList`
  flex: 1;
`;
const TransactionHeader = styled.View`
  flex-direction: row;
  margin: 10px 20px 10px 20px;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-color: #ffffff1f;
  align-items: center;
  padding-vertical: 10px;
`;
const SearchHeader = styled.View`
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;
  padding: 5px 20px;
`;


const Search = styled.TextInput`
  flex: 1;
  background-color: #5f5f5f9f;
  padding: 10px 10px 10px 35px;
  border-radius: 15px;
  color: white;
`;
const IconContainerL = styled.View`
  position: absolute;
  z-index: 1;
  left: 25px;
  top: 10px;
`;

const IconContainerR = styled.View`
  position: absolute;
  z-index: 1;
  right: 5px;
  bottom: 8px;
`;

const PurchaseContainer = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-vertical: 25px;
  border-bottom-width: 1px;
  border-color: #ffffff1f;
  margin: 1px 20px;
`;
const PurchaseInfo = styled.View`
  justify-content: center;
`;

export default Home;
