package com.lovecode.pretbancaire.dto;
import lombok.*;

import java.sql.Date;


@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
public class BankLoanDto {
    private Long accountNumber;
    private String customerName;
    private String bankName;
    private int amount;
    private Date loanDate;
    private int amountPaid;
    private int loanRate;

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getBankName() {
        return bankName;
    }

    public void setBankName(String bankName) {
        this.bankName = bankName;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public Date getLoanDate() {
        return loanDate;
    }

    public void setLoanDate(Date loanDate) {
        this.loanDate = loanDate;
    }

    public int getAmountPaid() {
        return amountPaid;
    }

    public void setAmountPaid(int amountPaid) {
        this.amountPaid = amountPaid;
    }

    @Override
    public String toString() {
        return "BankLoanDto{" +
                "customerName='" + customerName + '\'' +
                ", bankName='" + bankName + '\'' +
                ", amount=" + amount +
                ", loanDate=" + loanDate +
                ", amountPaid=" + amountPaid +
                '}';
    }
}
