package com.lovecode.pretbancaire.controllers;

import com.lovecode.pretbancaire.dto.BankLoanDto;
import com.lovecode.pretbancaire.entity.BankLoan;
import com.lovecode.pretbancaire.response.ResponseHandler;
import com.lovecode.pretbancaire.service.BankLoanService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@CrossOrigin("http://localhost:5173")
@RequestMapping("/api/v1/")
public class BankLoanController {

    @Autowired
    private BankLoanService service;

    @GetMapping("/all")
    public List<BankLoanDto> getAllBankLoan() {
        return service.getAllBankLoan();
    }


    @GetMapping("/all/{accountNumber}")
    public  List<BankLoanDto> getBankLoanById(@PathVariable("accountNumber") Long accountNumber) {
        return service.getBankLoanById(accountNumber);
    }

    /*
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000") // Change to allowed origins
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Allowed HTTP methods
                .allowedHeaders("Content-Type", "Authorization", "X-My-Custom-Header"); // Allowed headers
    }

     */
    /*
    public ResponseEntity<Object> getAllBankLoan() {

        try {
            return ResponseHandler.generateResponse("Request Bank : detail are given here", HttpStatus.OK, service.getAllBankLoan());
        } catch (Exception e) {
            return ResponseHandler.generateResponse(null, HttpStatus.MULTI_STATUS, service.getAllBankLoan());
        }
    }

     */

    @PostMapping("/add")
    public BankLoan addi(@RequestBody BankLoan bankLoan) {
        return service.add(
                bankLoan.getAccountNumber(),
                bankLoan.getCustomerName(),
                bankLoan.getBankName(),
                bankLoan.getAmount(),
                bankLoan.getLoanDate(),
                bankLoan.getLoanRate()
        );
    }
    /*
    public ResponseEntity<Object> addi(@RequestBody BankLoan bankLoan){
        try {
            return ResponseHandler.generateResponse("Request Bank loan detail are given here", HttpStatus.OK, service.add(
                    bankLoan.getAccountNumber(),
                    bankLoan.getCustomerName(),
                    bankLoan.getBankName(),
                    bankLoan.getAmount(),
                    bankLoan.getLoanDate(),
                    bankLoan.getLoanRate()
            ));
        }
        catch (Exception e){
            return ResponseHandler.generateResponse(null, HttpStatus.OK, null);
        }

    }


     */
    @DeleteMapping("/delete/{id}")
    public BankLoan deleteBankLoan(@PathVariable("id") Long accountNumber) {
        return service.deleteBankLoan(accountNumber);
    }

    /*
    public ResponseEntity<Object> deleteBankLoan(@PathVariable("id") Long accountNumber){
        try {
            return ResponseHandler.generateResponse("Request Bank loan detail are given here", HttpStatus.OK, service.deleteBankLoan(accountNumber));
        }
        catch (Exception e){
            return ResponseHandler.generateResponse(null, HttpStatus.OK, null);
        }

    }

     */

    @PutMapping("/edit/{id}")
    public BankLoan edit(@PathVariable("id") Long accountNumber, @RequestBody BankLoan bankLoan) {
        return service.edit(
                accountNumber,
                bankLoan.getCustomerName(),
                bankLoan.getBankName(),
                bankLoan.getAmount(),
                bankLoan.getLoanDate(),
                bankLoan.getLoanRate()
        );
    }

    /*
    public ResponseEntity<Object> edit(@PathVariable("id") Long accountNumber, @RequestBody BankLoan bankLoan ){
        try {
            return ResponseHandler.generateResponse("Request Bank loan detail are given here", HttpStatus.OK, service.edit(
                    accountNumber,
                    bankLoan.getCustomerName(),
                    bankLoan.getBankName(),
                    bankLoan.getAmount(),
                    bankLoan.getLoanDate(),
                    bankLoan.getLoanRate()
            ));
        }
        catch (Exception e){
            return ResponseHandler.generateResponse(null, HttpStatus.OK, null);
        }

    }

     */

    @GetMapping("/minMax")
    public  List<Integer> getMinMax(){
        return service.getMinMax();
    }

    /*
    public ResponseEntity<Object> getMinMax(){
        try {
            return ResponseHandler.generateResponse("Request Bank loan detail are given here", HttpStatus.OK, service.getMinMax());
        }
        catch (Exception e){
            return ResponseHandler.generateResponse(null, HttpStatus.OK, null);
        }
    }

     */

}