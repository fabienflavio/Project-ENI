package com.lovecode.pretbancaire.mapper;
import com.lovecode.pretbancaire.dto.BankLoanDto;
import com.lovecode.pretbancaire.entity.BankLoan;


public class BankLoanMapper {
    public static BankLoanDto mapToDto(BankLoan bankLoan){

        int amountPaid = 1 + bankLoan.getLoanRate();

        BankLoanDto bankLoanDto;
        bankLoanDto = BankLoanDto.builder()
                .accountNumber(bankLoan.getAccountNumber())
                .customerName(bankLoan.getCustomerName())
                .bankName(bankLoan.getBankName())
                .amount(bankLoan.getAmount())
                .loanDate(bankLoan.getLoanDate())
                .amountPaid(amountPaid)
                .loanRate(bankLoan.getLoanRate())
                .build();

        return bankLoanDto;
    }

}
