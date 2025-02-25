const PaymentModule = (props) => {
  return (
    <section>
      <div>Начинка от банка</div>
      <div className="text-sm italic">
        Сумма, которую передать в платёжный алгоритм банка
      </div>

      <div className="text-5xl">{props.totalToBePaid}</div>
    </section>
  );
};

export default PaymentModule;
