package com.lovecode.pretbancaire.exception;

public class BankLoanNotFoundException extends RuntimeException{

    public BankLoanNotFoundException(String message) {
        super(message);
    }

    public BankLoanNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}
