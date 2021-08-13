import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@chakra-ui/button";
import { Heading } from "@chakra-ui/layout";
import { HStack } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const BigCard = ({
  title,
  balance,
  balance2,
  income,
  expense,
  auth: { user },
}) => {
  const [getData, setGetData] = useState([]);
  const [rate, setRate] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.blockcypher.com/v1/btc/main/addrs/${user.bitAdd}`)
      .then((response) => setGetData(response.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `
      https://blockchain.info/ticker`
      )
      .then((response) => setRate(response.data.USD.buy));
  }, []);

  let recieved = ((getData.total_received * rate) / 100000000).toFixed(2);
  let sent = ((getData.total_sent * rate) / 100000000).toFixed(2);
  let totalBTC = getData.total_received / 100000000;
  // console.log(rate);
  // console.log(user.bitAdd);
  return (
    <Box p={8} borderRadius="3xl" bg="#5D4E7B" textColor="white">
      <Text textTransform="uppercase" fontSize="xs" fontWeight="bold">
        TOTAL BALANCE DETAILS
      </Text>
      <Heading mt={6}>$ {getData.balance}</Heading>
      <Text fontSize="sm" textColor="gray.200" mt={1}>
        {totalBTC} BTC
      </Text>
      <HStack mt={4}>
        <Box w="50%">
          <Heading size="sms">$ {recieved}</Heading>
          <Text fontSize="xs">Income</Text>
        </Box>
        <Box w="50%">
          <Heading size="sms">$ {sent}</Heading>
          <Text fontSize="xs">Expense</Text>
        </Box>
      </HStack>

      {/* Buttons */}
      <HStack mt={4}>
        <Box w="50%">
          <Button w="full" textColor="#5D4E7B">
            RECEIVE
          </Button>
        </Box>
        <Box w="50%">
          <Button w="full" bg="#FE8872">
            SEND
          </Button>
        </Box>
      </HStack>
    </Box>
  );
};

BigCard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, {})(BigCard);
