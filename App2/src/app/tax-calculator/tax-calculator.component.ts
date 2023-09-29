import { Component } from '@angular/core';

@Component({
  selector: 'app-tax-calculator',
  templateUrl: './tax-calculator.component.html',
  styleUrls: ['./tax-calculator.component.css']
})
export class TaxCalculatorComponent {

  total_gross:number=0;
  basic_sal:number=0;
  hra_amt:number=0;
  other_income_amt:number=0;
  lic_amt:number=0;
  ppf_amt:number=0;
  mf_amt:number=0;
  epf_amt:number=0;
  mediclaim_amt:number=0;
  standard_deduction:number=50000;

  Total_Gross_income:number=0;
  Taxable_income:number=0;

  Total_tax:number=0;

  frmdata:any;

  tax_slab1:number=0;
  tax_slab2:number=0;
  tax_slab3:number=0;
  tax_slab4:number=0;
  tax_slab5:number=0;
  tax_slab6:number=0;
  tax_slab7:number=0;
  tax_slab8:number=0;
  tax_slab9:number=0;

  ngOnInit()
  {
    this.tax_slab1=300000-250000;
    this.tax_slab2=500000-300000;
    this.tax_slab3=600000-500000;
    this.tax_slab4=750000-600000;
    this.tax_slab5=900000-750000;
    this.tax_slab6=1000000-900000;
    this.tax_slab7=1200000-1000000;
    this.tax_slab8=1250000-1200000;
    this.tax_slab9=1500000-1250000;
  }

  calculateTax(formdata:any)
  {
    this.total_gross=Number(formdata.gross_sal);
    this.basic_sal=Number(formdata.basic_sal);
    this.other_income_amt=Number(formdata.otherincome_sal);
    
    // Deductions
    this.lic_amt=Number(formdata.deductions.lic_amount);
    this.ppf_amt=Number(formdata.deductions.ppf_amount);
    this.epf_amt=Number(formdata.deductions.epf_amount);
    this.mf_amt = Number(formdata.deductions.mf_amount);
    this.hra_amt=(0.4*this.basic_sal)*5;
    this.mediclaim_amt=Number(formdata.mediclaim_amount);

    this.Total_Gross_income=this.total_gross+this.other_income_amt;
    this.Taxable_income=this.Total_Gross_income-(this.lic_amt+this.ppf_amt+this.epf_amt+this.mf_amt+this.hra_amt+this.mediclaim_amt);
    console.log(this.Taxable_income);

    if(this.Total_Gross_income<=300000 && this.Total_Gross_income >=250000)
    {
              this.Total_tax=(5/100)*this.Total_Gross_income;
    }
    else if(this.Total_Gross_income<=500000 && this.Total_Gross_income >=300000)
    {
              this.Total_tax=(5/100)*this.Total_Gross_income+(5/100)*this.tax_slab2;
    }
    else if(this.Total_Gross_income<=600000 && this.Total_Gross_income >=500000)
    {
              // this.Total_tax=(20/100)*this.Total_Gross_income+(5/100)*this.tax_slab1+(5/100)*this.tax_slab2;
              this.Total_tax=(20/100)*this.Total_Gross_income;
              console.log("HRA : "+this.hra_amt);
              console.log(this.Total_tax+(5/100)*this.tax_slab1+(5/100)*this.tax_slab2);
              console.log("Taxable income : "+this.Taxable_income);
    }
    else if(this.Total_Gross_income<=750000 && this.Total_Gross_income >=600000)
    {
              this.Total_tax=(20/100)*this.Total_Gross_income+(5/100)*this.tax_slab1+(5/100)*this.tax_slab2+(20/100)*this.tax_slab3;
    }
    else if(this.Total_Gross_income<=900000 && this.Total_Gross_income >=750000)
    {
              this.Total_tax=(20/100)*this.Total_Gross_income+(5/100)*this.tax_slab1+(5/100)*this.tax_slab2+(20/100)*this.tax_slab3+(20/100)*this.tax_slab4;
    }
    else if(this.Total_Gross_income<=1000000 && this.Total_Gross_income >=900000)
    {
              console.log("10k");
              this.Total_tax=(0.2)*this.Taxable_income;
    }
    else if(this.Total_Gross_income<=1200000 && this.Total_Gross_income >=1000000)
    {
              this.Total_tax=(30/100)*this.Total_Gross_income+(5/100)*this.tax_slab1+(5/100)*this.tax_slab2+(20/100)*this.tax_slab3+(20/100)*this.tax_slab4+(20/100)*this.tax_slab5+(20/100)*this.tax_slab6;
    }
    else if(this.Total_Gross_income<=1250000 && this.Total_Gross_income >=1200000)
    {
              this.Total_tax=(30/100)*this.Total_Gross_income+(5/100)*this.tax_slab1+(5/100)*this.tax_slab2+(20/100)*this.tax_slab3+(20/100)*this.tax_slab4+(20/100)*this.tax_slab5+(20/100)*this.tax_slab6+(30/100)*this.tax_slab7;
    }
    else if(this.Total_Gross_income<=1500000 && this.Total_Gross_income >=1250000)
    {
        	    this.Total_tax=(30/100)*this.Total_Gross_income+(5/100)*this.tax_slab1+(5/100)*this.tax_slab2+(20/100)*this.tax_slab3+(20/100)*this.tax_slab4+(20/100)*this.tax_slab5+(20/100)*this.tax_slab6+(30/100)*this.tax_slab7+(30/100)*this.tax_slab8;
    }
    else
    {
             this.Total_tax=(30/100)*this.Total_Gross_income+(5/100)*this.tax_slab1+(5/100)*this.tax_slab2+(20/100)*this.tax_slab3+(20/100)*this.tax_slab4+(20/100)*this.tax_slab5+(20/100)*this.tax_slab6+(30/100)*this.tax_slab7+(30/100)*this.tax_slab8;
    }
    
  }
}
