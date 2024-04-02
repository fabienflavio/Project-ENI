package com.lovecode.pretbancaire.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class BankLoanExceptionHandler {

    @ExceptionHandler(value = {BankLoanNotFoundException.class})
    public ResponseEntity<Object> handleBankLoanNotFoundException(BankLoanNotFoundException bankLoanNotFoundException){
        BankLoanException bankLoanException = new BankLoanException(
                bankLoanNotFoundException.getMessage(),
                bankLoanNotFoundException.getCause(),
                HttpStatus.NOT_FOUND
        );

        return new ResponseEntity<>(bankLoanException, HttpStatus.NOT_FOUND);
    }
}
