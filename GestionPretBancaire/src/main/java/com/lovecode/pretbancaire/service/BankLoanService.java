package com.lovecode.pretbancaire.service;

import com.lovecode.pretbancaire.dto.BankLoanDto;
import com.lovecode.pretbancaire.entity.BankLoan;
import com.lovecode.pretbancaire.exception.BankLoanNotFoundException;
import com.lovecode.pretbancaire.mapper.BankLoanMapper;
import com.lovecode.pretbancaire.repository.BankLoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BankLoanService {

    @Autowired
    private BankLoanRepository repository;

    public List<BankLoanDto> getAllBankLoan(){
        if (repository.findAll().isEmpty()){
            throw new BankLoanNotFoundException("Request BankLoan does not exist");
        }
        return repository.findAll()
                .stream()
                .map(bankLoan -> BankLoanMapper.mapToDto(bankLoan))
                .collect(Collectors.toList());
    }

    public List<BankLoanDto> getBankLoanById(Long accountNumber) {
        if (repository.findAll().isEmpty()){
            throw new BankLoanNotFoundException("Request BankLoan does not exist");
        }

        return repository.findById(accountNumber)
                .stream()
                .map(bankLoan -> BankLoanMapper.mapToDto(bankLoan))
                .collect(Collectors.toList());
    }

    public BankLoan add(Long accountNumber, String customerName, String bankName, int amount, Date loanDate, int loanRate){
        BankLoan bankLoan = new BankLoan();
        bankLoan.setAccountNumber(accountNumber);
        bankLoan.setCustomerName(customerName);
        bankLoan.setBankName(bankName);
        bankLoan.setAmount(amount);
        bankLoan.setLoanDate(loanDate);
        bankLoan.setLoanRate(loanRate);
        
        repository.save(bankLoan);

        return bankLoan;
    }

    public BankLoan deleteBankLoan(Long accountNumber) {
        if (repository.findById(accountNumber).isEmpty()){
            throw new BankLoanNotFoundException("Request BankLoan does not exist");
        }

       BankLoan bankLoan = repository.findById(accountNumber).get();
       repository.deleteById(accountNumber);

        return bankLoan;
    }

    public BankLoan edit(Long accountNumber, String customerName, String bankName, int amount, Date loanDate, int loanRate)
    {
        if (repository.findById(accountNumber).isEmpty()){
            throw new BankLoanNotFoundException("Request BankLoan does not exist");
        }

        BankLoan bankLoan = repository.findById(accountNumber).get();
        bankLoan.setCustomerName(customerName);
        bankLoan.setBankName(bankName);
        bankLoan.setAmount(amount);
        bankLoan.setLoanDate(loanDate);
        bankLoan.setLoanRate(loanRate);
        repository.save(bankLoan);
        return bankLoan;
    }

    public List<Integer> getMinMax() {
        if (repository.findAll().isEmpty()){
            throw new BankLoanNotFoundException("Request BankLoan does not exist");
        }

        List<BankLoan> bankLoans = repository.findAll();

        if (bankLoans.isEmpty()) {
            return null;
        }

        int min = bankLoans.stream().mapToInt(BankLoan::getLoanRate).min().getAsInt();
        int minBankLoan = 1 + min;

        int max = bankLoans.stream().mapToInt(BankLoan::getLoanRate).max().getAsInt();
        int maxBankLoan = 1 + max;

        int totalAmountPaid = 0;

        for (BankLoan bankLoan : bankLoans) {
            totalAmountPaid += (1 + bankLoan.getLoanRate());
        }

        List<Integer> integers = new LinkedList<>();
        integers.add(minBankLoan);
        integers.add(maxBankLoan);
        integers.add(totalAmountPaid);

        return integers;
    }
}
