/**
 * Formata uma mensagem para envio na API.
 *
 * @param boolean $isSuccess Resposta se o resultado da operação foi bem sucedido.
 * @param integer $code O código da resposta, geralmente igual o código HTTP da resposta.
 * @param string [$message=null] A mensagem de resposta. Ela é um resumo do que a operação realizou e pode ser utilizada na exibição para o uusário.
 * @param mixed [$payload=null] Os dados a serem enviados na requisição, caso existam.
 * Os dados enviados podem ser um objeto ou um array de objetos, dependendo da chamada a API.
 *
 * Caso este parâmetro seja uma instância de `LengthAwarePaginator` o retorno formatado será um objeto com informações de paginação.
 *
 * @return mixed A resposta para a API formatada com os parâmetros passados.
 *
 * O resultado tem o seguinte formato:
 * ```
 * [
 *     'isSuccess' => true // Resultado da operação.
 *     'message' => 'Operação realizada com êxito.' // A mensagem de resultado.
 *     'code' => 200 // O código do resultado.
 *     'payload' => [] // O resultado da operação
 * ]
 * ```
 */
export const apiMessage = (
  isSuccess: boolean,
  code: number,
  message?: string,
  payload?: any
) => {
  return {
    isSuccess,
    code,
    message,
    payload,
  };
};
