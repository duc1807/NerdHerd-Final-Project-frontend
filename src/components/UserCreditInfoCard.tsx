import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface UserCreditInfoCardProps {
  phoneNumber: string
}

const Line = function () {
  return <View style={styles.line} />
}

export default function UserCreditInfoCard (props: UserCreditInfoCardProps) {
  const { phoneNumber } = props

  return (
    <>
      <View style={styles.content}>
        <View style={styles.V_phoneNum}>
          <Text style={styles.phoneNum}>{phoneNumber}</Text>
        </View>

        <Line></Line>

        <View style={styles.V_creditScore}>
          <Text style={styles.T_creditScoreHeader}>Diem tin dung</Text>
          <Text style={styles.Graph_CreditScore}>!!! Graph &amp; Gauge go here !!! Still in development </Text>
          <Text style={styles.T_creditScoreNote}>Goi y: Ban nen duy tri...</Text>
        </View>

        <Line></Line>

        <View style={styles.V_creditScoreHistory}>
          <Text style={styles.T_creditScoreHistoryHeader}>Lich su diem tin dung</Text>
          <Text style={styles.Graph_creditScoreHistory}>!!! Graph &amp; Gauge go here !!! Still in development </Text>
          <Text style={styles.T_creditScoreHistoryNote}>Chi tiet</Text>
        </View>

        <Line></Line>

        <View style={styles.V_loanDetail}>
          <Text style={styles.T_loanDetailHeader}>Tinh toan khoan vay</Text>
          <Text style={styles.T_loanDetailResult}>dhbiausdnoisdf</Text>

          <TextInput
            style={styles.loanType}
            placeholder="Chon kieu vay"
          />

          <TextInput
            style={styles.loanAmount}
            placeholder="So tien vay"
          />


          <TouchableOpacity
            style={styles.buttonNext}
          >
            <Text style={styles.buttonText}>Tiep tuc</Text>
          </TouchableOpacity>

        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  line: {
    height: 18,
    width: 100 + '%',
    backgroundColor: '#e3d3d3'
  },

  container: {
    flex: 1,
    justifyContent: 'center'
  },
  header: {
    height: 100,
    justifyContent: 'flex-end'
  },
  headerText: {
    paddingBottom: 20,
    fontSize: 28
  },
  content: {
    width: 400,
    backgroundColor: 'transparent',
    marginHorizontal: 30,
    borderWidth: 3,
    borderRadius: 20,
    flexDirection: 'column',
  },
  footer: {
    flex: 0.08,
  },
  //Content View
  V_phoneNum: {
    height: 80,
    width: 100 + '%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  phoneNum: {
    fontSize: 30
  },
  ////////
  V_creditScore: {
    width: 100 + '%',
    height: 270,
    justifyContent: 'space-between'
  },
  T_creditScoreHeader: {
    fontSize: 22,
    padding: 10
  },
  Graph_CreditScore: {
    alignSelf: 'center'
  },
  T_creditScoreNote: {
    padding: 10
  },

  /////
  V_creditScoreHistory: {
    width: 100 + '%',
    height: 400,
    justifyContent: 'space-between'
  },
  T_creditScoreHistoryHeader: {
    fontSize: 22,
    padding: 10
  },
  Graph_creditScoreHistory: {
    alignSelf: 'center'
  },
  T_creditScoreHistoryNote: {
    alignSelf: "center",
    paddingBottom: 10
  },


  ///////
  V_loanDetail: {

    height: 480,
    width: 100 + '%',
  },
  T_loanDetailHeader: {
    padding: 10,
    fontSize: 22
  },
  T_loanDetailResult:{

  },

  loanType: {
    height: 50,
    marginVertical: 20,
    width: 80 + '%',
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 30,
    paddingHorizontal: 20,
    fontSize: 17,
    alignSelf: 'center'
  },
  loanAmount: {
    height: 50,
    marginVertical: 20,
    width: 80 + '%',
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 30,
    paddingHorizontal: 20,
    fontSize: 17,
    alignSelf: 'center'
  },
  buttonNext: {
    paddingHorizontal: 40,
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 70,
    height: 50,
    width: 170,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '600'
  }

});