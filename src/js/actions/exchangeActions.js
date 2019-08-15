import constants from "../services/constants"
import * as converter from "../utils/converter"

// export function selectTokenAsync(symbol, address, type, ethereum) {
//   return {
//     type: "EXCHANGE.SELECT_TOKEN_ASYNC",
//     payload: { symbol, address, type, ethereum }
//   }
// }
export function selectToken(sourceTokenSymbol, sourceToken, destTokenSymbol, destToken, type) {
  return {
    type: "EXCHANGE.SELECT_TOKEN",
    payload: { sourceTokenSymbol, sourceToken, destTokenSymbol, destToken, type}
  }
}
export function checkSelectToken() {
  return {
    type: "EXCHANGE.CHECK_SELECT_TOKEN"
  }
}

export function caculateAmount(sourceTokenDecimals, destTokenDecimals) {
  return {
    type: "EXCHANGE.CACULATE_AMOUNT",
    payload: { sourceTokenDecimals, destTokenDecimals }
  }
}

export function inputChange(focus, value, sourceTokenDecimals, destTokenDecimals) {
  return {
    type: "EXCHANGE.INPUT_CHANGE",
    payload: { focus, value, sourceTokenDecimals, destTokenDecimals }
  }
}

export function focusInput(focus) {
  return {
    type: "EXCHANGE.FOCUS_INPUT",
    payload: focus
  }
}

// export function thowErrorSourceAmount(message) {
//   return {
//     type: "EXCHANGE.THROW_SOURCE_AMOUNT_ERROR",
//     payload: message
//   }
// }

export function throwErrorSourceAmount(key, message) {
  return {
    type: "EXCHANGE.THROW_ERROR_SOURCE_AMOUNT",
    payload: {key, message}
  }
}

export function clearErrorSourceAmount(key) {
  return {
    type: "EXCHANGE.CLEAR_ERROR_SOURCE_AMOUNT",
    payload: {key}
  }
}

// export function thowErrorMaxCap() {
//   return {
//     type: "EXCHANGE.THROW_SOURCE_AMOUNT_ERROR",
//     payload: message
//   }
// }

// export function thowErrorEthBalance(message) {
//   return {
//     type: "EXCHANGE.THROW_ETH_BALANCE_ERROR",
//     payload: message
//   }
// }

// export function thowErrorGasPrice(message) {
//   return {
//     type: "EXCHANGE.THROW_GAS_PRICE_ERROR",
//     payload: message
//   }
// }

export function throwErrorSlippageRate(key, message) {
  return {
    type: "EXCHANGE.THROW_ERROR_SLIPPAGE_RATE",
    payload: {key, message}
  }
}

// export function thowErrorRate(message) {
//   return {
//     type: "EXCHANGE.THROW_RATE_ERROR",
//     payload: message
//   }
// }

// export function goToStep(step) {
//   return {
//     type: "EXCHANGE.GO_TO_STEP",
//     payload: step
//   }
// }

export function specifyGas(value) {
  return {
    type: "EXCHANGE.SPECIFY_GAS",
    payload: value
  }
}

export function seSelectedGas(level) {
  return {
    type: "EXCHANGE.SET_SELECTED_GAS",
    payload: { level: level }
  }
}

export function specifyGasPrice(value) {
  return {
    type: "EXCHANGE.SPECIFY_GAS_PRICE",
    payload: value
  }
}

export function toggleAdvance() {
  return {
    type: "EXCHANGE.TOGGLE_ADVANCE",
  }
}

export function setRandomExchangeSelectedToken(random) {
  return {
    type: "EXCHANGE.SET_RANDOM_SELECTED_TOKEN",
    payload: random
  }
}

export function updateRate(ethereum, sourceTokenSymbol, sourceToken, destTokenSymbol, destToken, sourceAmount, isManual = false, refetchSourceAmount = false, type = null) {
  return {
    type: "EXCHANGE.UPDATE_RATE_PENDING",
    payload: { ethereum, sourceTokenSymbol, sourceToken, destTokenSymbol, destToken, sourceAmount, isManual, refetchSourceAmount, type }
  }
}

// export function updateRateExchangeAndValidateSource(ethereum, source, dest, sourceAmount, sourceTokenSymbol, isManual = false, refetchSourceAmount = false) {
//   return {
//     type: "EXCHANGE.UPDATE_RATE_AND_VALIDATE_SOURCE",
//     payload: { ethereum, source, dest, sourceAmount, sourceTokenSymbol, isManual, refetchSourceAmount }
//   }
// }

// export function updateRateSnapshot(ethereum) {
//   return {
//     type: "EXCHANGE.UPDATE_RATE_SNAPSHOT",
//     payload: ethereum
//   }
// }

// export function updatePrevSource(value) {
//   return {
//     type: "EXCHANGE.SET_PREV_SOURCE",
//     payload: { value }
//   }
// }

export function updateRateExchangeComplete(expectedRateInit, expectedPrice, slippagePrice, lastestBlock, isManual, percentChange, srcTokenDecimal, destTokenDecimal) {
  return {
    type: "EXCHANGE.UPDATE_RATE_COMPLETE",
    payload: { expectedRateInit, expectedPrice, slippagePrice, lastestBlock, isManual, percentChange, srcTokenDecimal, destTokenDecimal }
  }

}

// export function updateRateSnapshotComplete(rateInit, expectedPrice, slippagePrice) {
//   return {
//     type: "EXCHANGE.UPDATE_RATE_SNAPSHOT_COMPLETE",
//     payload: { rateInit, expectedPrice, slippagePrice: converter.toT(slippagePrice, 18), rateInitSlippage: converter.toT(rateInit, 18) }
//   }

// }

// export function openPassphrase() {
//   return {
//     type: "EXCHANGE.OPEN_PASSPHRASE",
//   }
// }

// export function hidePassphrase() {
//   return {
//     type: "EXCHANGE.HIDE_PASSPHRASE",
//   }
// }

// export function hideConfirm() {
//   return {
//     type: "EXCHANGE.HIDE_CONFIRM",
//   }
// }

// export function showConfirm() {
//   return {
//     type: "EXCHANGE.SHOW_CONFIRM",
//   }
// }

// export function hideApprove() {
//   return {
//     type: "EXCHANGE.HIDE_APPROVE",
//   }
// }

// export function hideApproveZero() {
//   return {
//     type: "EXCHANGE.HIDE_APPROVE_ZERO",
//   }
// }

// export function showApprove() {
//   return {
//     type: "EXCHANGE.SHOW_APPROVE",
//   }
// }

// export function showApproveZero() {
//   return {
//     type: "EXCHANGE.SHOW_APPROVE_ZERO",
//   }
// }

// export function changePassword() {
//   return {
//     type: "EXCHANGE.CHANGE_PASSPHRASE",
//   }
// }


// export function prePareBroadcast(balanceData) {
//   return {
//     type: "EXCHANGE.PREPARE_BROADCAST",
//     payload: { balanceData }
//   }
// }

export function finishExchange() {
  return {
    type: "EXCHANGE.FINISH_EXCHANGE"
  }
}

// export function throwPassphraseError(message) {
//   return {
//     type: "EXCHANGE.THROW_ERROR_PASSPHRASE",
//     payload: message
//   }
// }

// export function processExchange(formId, ethereum, address, sourceToken,
//   sourceAmount, destToken, destAddress,
//   maxDestAmount, minConversionRate,
//   throwOnFailure, nonce, gas,
//   gasPrice, keystring, type, password, account, data, keyService, balanceData, sourceTokenSymbol, blockNo) {
//   return {
//     type: "EXCHANGE.PROCESS_EXCHANGE",
//     payload: {
//       formId, ethereum, address, sourceToken,
//       sourceAmount, destToken, destAddress,
//       maxDestAmount, minConversionRate,
//       throwOnFailure, nonce, gas,
//       gasPrice, keystring, type, password, account, data, keyService, balanceData, sourceTokenSymbol, blockNo
//     }
//   }
// }

// export function checkTokenBalanceOfColdWallet(formId, ethereum, address, sourceToken,
//   sourceAmount, destToken, destAddress,
//   maxDestAmount, minConversionRate,
//   throwOnFailure, nonce, gas,
//   gasPrice, keystring, type, password, account, data, keyService) {
//   return {
//     type: "EXCHANGE.CHECK_TOKEN_BALANCE_COLD_WALLET",
//     payload: {
//       formId, ethereum, address, sourceToken,
//       sourceAmount, destToken, destAddress,
//       maxDestAmount, minConversionRate,
//       throwOnFailure, nonce, gas,
//       gasPrice, keystring, type, password, account, data, keyService
//     }
//   }
// }

// export function doApprove(ethereum, sourceToken, sourceAmount, nonce, gas, gasPrice,
//   keystring, password, accountType, account, keyService, sourceTokenSymbol) {
//   return {
//     type: "EXCHANGE.PROCESS_APPROVE",
//     payload: {
//       ethereum, sourceToken, sourceAmount, nonce, gas, gasPrice,
//       keystring, password, accountType, account, keyService, sourceTokenSymbol
//     }
//   }
// }

// export function doApproveZero(ethereum, sourceToken, sourceAmount, nonce, gas, gasPrice,
//   keystring, password, accountType, account, keyService, sourceTokenSymbol) {
//   return {
//     type: "EXCHANGE.PROCESS_APPROVE_ZERO",
//     payload: {
//       ethereum, sourceToken, sourceAmount, nonce, gas, gasPrice,
//       keystring, password, accountType, account, keyService, sourceTokenSymbol
//     }
//   }
// }

// export function doTransaction(id, ethereum, tx, account, data) {
//   return {
//     type: "EXCHANGE.TX_BROADCAST_PENDING",
//     payload: { ethereum, tx, account, data },
//     meta: id,
//   }
// }

export function doTransactionComplete(tx) {
  return {
    type: "EXCHANGE.TX_BROADCAST_FULFILLED",
    payload: {tx},
  }
}

// export function doTransactionFail(error) {
//   return {
//     type: "EXCHANGE.TX_BROADCAST_REJECTED",
//     payload: error
//   }
// }

// export function doApprovalTransaction(id, ethereum, tx, callback) {
//   return {
//     type: "EXCHANGE.APPROVAL_TX_BROADCAST_PENDING",
//     payload: { ethereum, tx, callback },
//     meta: id,
//   }
// }

// export function doApprovalTransactionComplete(txHash, id) {
//   return {
//     type: "EXCHANGE.APPROVAL_TX_BROADCAST_FULFILLED",
//     payload: txHash,
//     meta: id,
//   }
// }

// export function doApprovalTransactionFail(error) {
//   return {
//     type: "EXCHANGE.APPROVAL_TX_BROADCAST_REJECTED",
//     payload: error,
//   }
// }

// export function resetSignError() {
//   return {
//     type: "EXCHANGE.RESET_SIGN_ERROR",
//   }
// }

// export function setSignError(error) {
//   return {
//     type: "EXCHANGE.SET_SIGN_ERROR",
//     payload: error,
//   }
// }

// export function resetBroadcastError() {
//   return {
//     type: "EXCHANGE.RESET_BROADCAST_ERROR",
//   }
// }

// export function setBroadcastError(error) {
//   return {
//     type: "EXCHANGE.SET_BROADCAST_ERROR",
//     payload: error,
//   }
// }

export function makeNewExchange() {
  return {
    type: "EXCHANGE.MAKE_NEW_EXCHANGE"
  }
}

// export function updateCurrentBalance(sourceBalance, destBalance, txHash) {
//   return {
//     type: "EXCHANGE.UPDATE_CURRENT_BALANCE",
//     payload: { sourceBalance, destBalance, txHash }
//   }
// }

export function setTermAndServices(value) {
  return {
    type: "EXCHANGE.SET_TERM_AND_SERVICES",
    payload: { value }
  }
}

export function setMinRate(value) {
  return {
    type: "EXCHANGE.SET_MIN_RATE",
    payload: { value }
  }
}

export function resetMinRate() {
  return {
    type: "EXCHANGE.RESET_MIN_RATE",
  }
}


export function estimateGas() {
  return {
    type: "EXCHANGE.ESTIMATE_GAS_USED",
  }
}

export function estimateGasNormal() {
  return {
    type: "EXCHANGE.ESTIMATE_GAS_USED_NORMAL",
  }
}

export function setEstimateGas(gas, gas_approve) {
  return {
    type: "EXCHANGE.SET_GAS_USED",
    payload: { gas, gas_approve }
  }
}

export function setEstimateGasSnapshot(gas, gas_approve) {
  return {
    type: "EXCHANGE.SET_GAS_USED_SNAPSHOT",
    payload: { gas, gas_approve }
  }
}

export function swapToken() {
  return {
    type: "EXCHANGE.SWAP_TOKEN",
  }
}

// export function setCapExchange(maxCap) {
//   return {
//     type: "EXCHANGE.SET_CAP_EXCHANGE",
//     payload: { maxCap }
//   }
// }

// export function thowErrorNotPossessKGt(message) {
//   return {
//     type: "EXCHANGE.THROW_NOT_POSSESS_KGT_ERROR",
//     payload: message
//   }
// }

export function setMaxGasPrice(ethereum) {
  return {
    type: "EXCHANGE.SET_MAX_GAS_PRICE",
    payload: ethereum
  }
}

export function setMaxGasPriceComplete(maxGasPriceGwei) {
  return {
    type: "EXCHANGE.SET_MAX_GAS_PRICE_COMPLETE",
    payload: maxGasPriceGwei
  }
}

export function setGasPriceSwapComplete(safeLowGas, standardGas, fastGas, superFastGas, defaultGas, selectedGas) {
  return {
    type: "EXCHANGE.SET_GAS_PRICE_SWAP_COMPLETE",
    payload: { safeLowGas, standardGas, defaultGas, fastGas, superFastGas, selectedGas }
  }
}

export function setGasPriceSuggest(gasPriceSuggest) {
  return {
    type: "EXCHANGE.SET_GAS_PRICE_SUGGEST",
    payload: gasPriceSuggest
  }
}

// export function analyzeError(ethereum, txHash) {
//   return {
//     type: "EXCHANGE.ANALYZE_ERROR",
//     payload: { ethereum, txHash }
//   }
// }

// export function setAnalyzeError(networkIssues, txHash) {
//   return {
//     type: "EXCHANGE.SET_ANALYZE_ERROR",
//     payload: { networkIssues, txHash }
//   }
// }


export function fetchGas() {
  return {
    type: "EXCHANGE.FETCH_GAS"
  }
}
// export function fetchGasSnapshot() {
//   return {
//     type: "EXCHANGE.FETCH_GAS_SNAPSHOT"
//   }
// }

export function fetchGasSuccess() {
  return {
    type: "EXCHANGE.FETCH_GAS_SUCCESS"
  }
}

// export function fetchGasSuccessSnapshot() {
//   return {
//     type: "EXCHANGE.FETCH_GAS_SUCCESS_SNAPSHOT"
//   }
// }

export function checkKyberEnable(ethereum) {
  return {
    type: "EXCHANGE.CHECK_KYBER_ENABLE",
    payload: {ethereum}
  }
}

// export function setKyberEnable(enable) {
//   return {
//     type: "EXCHANGE.SET_KYBER_ENABLE",
//     payload: enable
//   }
// }

// export function setApproveTxZero(hash, symbol) {
//   return {
//     type: "EXCHANGE.SET_APPROVE_TX_ZERO",
//     payload: { hash, symbol }
//   }
// }

// export function setApproveTx(hash, symbol) {
//   return {
//     type: "EXCHANGE.SET_APPROVE_TX",
//     payload: { hash, symbol }
//   }
// }

// export function removeApproveTx(symbol) {
//   return {
//     type: "EXCHANGE.REMOVE_APPROVE_TX",
//     payload: { symbol }
//   }
// }

export function setSnapshot(data) {
  data.isFetchingRate = true
  return {
    type: "EXCHANGE.SET_SNAPSHOT",
    payload: data
  }
}

export function verifyExchange() {
  return {
    type: "EXCHANGE.VERIFY_EXCHANGE",
  }
}

// export function fetchUserCap(ethereum) {
//   return {
//     type: "EXCHANGE.FETCH_USER_CAP",
//     payload: {ethereum}
//   }
// }

// export function setExchangeEnable(enable) {
//   return {
//     type: "EXCHANGE.SET_EXCHANGE_ENABLE",
//     payload: enable
//   }
// }

// export function updateBalanceData(balanceData, hash) {
//   return {
//     type: "EXCHANGE.UPDATE_BALANCE_DATA",
//     payload: { balanceData, hash }
//   }
// }

// export function throwErrorHandleAmount() {
//   return {
//     type: "EXCHANGE.HANDLE_AMOUNT"
//   }
// }

export function openImportAccount() {
  return {
    type: "EXCHANGE.OPEN_IMPORT_ACCOUNT"
  }
}

export function closeImportAccountExchange() {
  return {
    type: "EXCHANGE.CLOSE_IMPORT_ACCOUNT"
  }
}

export function toggleBalanceContent() {
  return {
    type: "EXCHANGE.TOGGLE_BALANCE_CONTENT"
  }
}
export function toggleAdvanceContent() {
  return {
    type: "EXCHANGE.TOGGLE_ADVANCE_CONTENT"
  }
}

export function setIsOpenAdvance() {
  return {
    type: "EXCHANGE.SET_IS_OPEN_ADVANCE",
    payload: true
  }
}

export function clearIsOpenAdvance() {
  return {
    type: "EXCHANGE.SET_IS_OPEN_ADVANCE",
    payload: false
  }
}

export function setSelectedGasPrice(gasPrice, gasLevel) {
  return {
    type: "EXCHANGE.SET_SELECTED_GAS_PRICE",
    payload: { gasPrice, gasLevel }
  }
}

export function setIsSelectTokenBalance(value) {
  return {
    type: "EXCHANGE.SET_IS_SELECT_TOKEN_BALANCE",
    payload: value
  }
}

// export function setSwappingTime(time) {
//   return {
//     type: "EXCHANGE.SET_SWAPPING_TIME",
//     payload: time
//   }
// }


export function changeAmount(input, value){
  return {
    type: "EXCHANGE.CHANGE_AMOUNT",
    payload: {input, value}
  }
}

export function setCustomRateInputError(isError) {
  return {
    type: "EXCHANGE.SET_CUSTOM_RATE_INPUT_ERROR",
    payload: isError
  }
}

export function setCustomRateInputDirty(isDirty) {
  return {
    type: "EXCHANGE.SET_CUSTOM_RATE_INPUT_DIRTY",
    payload: isDirty
  }
}

export function setCustomRateInputValue(value) {
  return {
    type: "EXCHANGE.SET_CUSTOM_RATE_INPUT_VALUE",
    payload: value
  }
}

export function setIsSelectCustomRate(value) {
  return {
    type: "EXCHANGE.SET_IS_SELECT_CUSTOM_RATE_INPUT",
    payload: value
  }
}


export function updateExchangePath(exchangePath, currentPathIndex){
  return {
    type: "EXCHANGE.UPDATE_EXCHANGE_PATH",
    payload: { exchangePath, currentPathIndex }
  }
}

export function resetExchangePath() {
  return {
    type: "EXCHANGE.RESET_EXCHANGE_PATH"
  }
}

export function  forwardExchangePath() {
  return {
    type: "EXCHANGE.FORWARD_EXCHANGE_PATH"
  }
}

export function saveApproveZeroTx(sourceTokenSymbol, txHash) {
  return {
    type: "EXCHANGE.SAVE_APPROVE_ZERO_TX",
    payload: { sourceTokenSymbol, txHash }
  }
}

export function saveApproveMaxTx(sourceTokenSymbol, txHash) {
  return {
    type: "EXCHANGE.SAVE_APPROVE_MAX_TX",
    payload: { sourceTokenSymbol, txHash }
  }
}
