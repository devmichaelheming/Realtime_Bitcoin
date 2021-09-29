import React, { useState, useEffect } from 'react';
import { StyleSheet, StatusBar, Text, View, SafeAreaView, Platform } from 'react-native';
import CurrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import QuotationsList from './src/components/QuotationsList';
import QuotationsItems from './src/components/QuotationsList/QuotationsItems';

function verifyNumber(number: number) {
  if (number <= 9) {
    return "0" + number
  } else {
    return number
  }
}

function url(qtDays: number) {
  const date : any = new Date();
  const listLastDays = qtDays;

  const end_date = `${date.getFullYear()}-${verifyNumber(date.getMonth()+1)}-${verifyNumber(date.getDate())}`
  date.setDate(date.getDate() - listLastDays);
  const start_date = `${date.getFullYear()}-${verifyNumber(date.getMonth()+1)}-${verifyNumber(date.getDate())}`

  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`;
}

async function getListCoins(url: string) {
  let response = await fetch(url);
  let returnApi = await response.json();
  let selectListQuotations = returnApi.bpi;

  const queryCoinsList = Object.keys(selectListQuotations).map((key) => {
    return {
      data: key.split("-").reverse().join("/"),
      valor: selectListQuotations[key]
    }
  });
  let data = queryCoinsList.reverse();
  console.log(data)
  return data;
}

async function getPriceCoinsGraphic(url: string) {
  let responseG = await fetch(url);
  let returnApiG = await responseG.json();
  let selectListQuotationsG = returnApiG.bpi;

  const queryCoinsListG = Object.keys(selectListQuotationsG).map((key) => {
    return selectListQuotationsG[key]
  });
  let dataG = queryCoinsListG;
  return dataG;
}

export default function App() {
  const [coinsList, setCoinsList] = useState([]);
  const [coinsGraphicList, setCoinsGraphicList] = useState([0]);
  const [days, setDays] = useState(1);
  const [updateData, setUpdateData] = useState(true);

  function updateDay(number: any) {
    setDays(number);
    setUpdateData(true);
  }

  useEffect(() => {
    getListCoins(url(days)).then((data: any) => {
      setCoinsList(data);
    })

    getPriceCoinsGraphic(url(days)).then((dataG: any) => {
      setCoinsGraphicList(dataG);
    })

    if (updateData) {
      setUpdateData(false);
    }
  }, [updateData]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#f50d41"
        barStyle="dark-content"
      />
      <CurrentPrice />
      <HistoryGraphic />
      <QuotationsList filterDay={updateDay} listTransactions={coinsList} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40 : 0
  },
});