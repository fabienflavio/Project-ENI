package com.lovecode.pretbancaire.response;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.Map;

public class ResponseHandler {

    public static ResponseEntity<Object> generateResponse(String message, HttpStatus status, Object responseObject){

        Map<String, Object> objectMap = new HashMap<>();
        objectMap.put("message : ", message);
        objectMap.put("satatus : ", status);
        objectMap.put("allCustomer", responseObject);

        ResponseEntity<Object> tResponseEntity = new ResponseEntity<>(objectMap, status);

        return tResponseEntity;
    }
}
