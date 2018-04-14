var crowdsaleOutput={
  "contracts" : 
  {
    "PrivatePreSale.sol:Claimable" : 
    {
      "abi" : "[{\"constant\":false,\"inputs\":[],\"name\":\"claimOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"pendingOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"}]",
      "bin" : "606060405260008054600160a060020a033316600160a060020a03199091161790556101fe806100306000396000f3006060604052600436106100615763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416634e71e0c881146100665780638da5cb5b1461007b578063e30c3978146100aa578063f2fde38b146100bd575b600080fd5b341561007157600080fd5b6100796100dc565b005b341561008657600080fd5b61008e61016a565b604051600160a060020a03909116815260200160405180910390f35b34156100b557600080fd5b61008e610179565b34156100c857600080fd5b610079600160a060020a0360043516610188565b60015433600160a060020a039081169116146100f757600080fd5b600154600054600160a060020a0391821691167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3600180546000805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a03841617909155169055565b600054600160a060020a031681565b600154600160a060020a031681565b60005433600160a060020a039081169116146101a357600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a723058208364405a161091792ebc95af503777835f2f634fa38c4eea8c7d3f3fad4734520029"
    },
    "PrivatePreSale.sol:ERC20" : 
    {
      "abi" : "[{\"constant\":false,\"inputs\":[{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"from\",\"type\":\"address\"},{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"who\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"owner\",\"type\":\"address\"},{\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"}]",
      "bin" : ""
    },
    "PrivatePreSale.sol:ERC20Basic" : 
    {
      "abi" : "[{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"who\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"}]",
      "bin" : ""
    },
    "PrivatePreSale.sol:KYCWhitelist" : 
    {
      "abi" : "[{\"constant\":false,\"inputs\":[],\"name\":\"claimOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_beneficiary\",\"type\":\"address\"}],\"name\":\"removeFromWhitelist\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_beneficiaries\",\"type\":\"address[]\"}],\"name\":\"addManyToWhitelist\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"whitelist\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"pendingOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_beneficiary\",\"type\":\"address\"}],\"name\":\"addToWhitelist\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"}]",
      "bin" : "606060405260008054600160a060020a033316600160a060020a03199091161790556103c1806100306000396000f30060606040526004361061008d5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416634e71e0c881146100925780638ab1d681146100a75780638c10671c146100c65780638da5cb5b146100e45780639b19251a14610113578063e30c397814610146578063e43252d714610159578063f2fde38b14610178575b600080fd5b341561009d57600080fd5b6100a5610197565b005b34156100b257600080fd5b6100a5600160a060020a0360043516610225565b34156100d157600080fd5b6100a56004803560248101910135610261565b34156100ef57600080fd5b6100f76102d9565b604051600160a060020a03909116815260200160405180910390f35b341561011e57600080fd5b610132600160a060020a03600435166102e8565b604051901515815260200160405180910390f35b341561015157600080fd5b6100f76102fd565b341561016457600080fd5b6100a5600160a060020a036004351661030c565b341561018357600080fd5b6100a5600160a060020a036004351661034b565b60015433600160a060020a039081169116146101b257600080fd5b600154600054600160a060020a0391821691167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3600180546000805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a03841617909155169055565b60005433600160a060020a0390811691161461024057600080fd5b600160a060020a03166000908152600260205260409020805460ff19169055565b6000805433600160a060020a0390811691161461027d57600080fd5b5060005b818110156102d45760016002600085858581811061029b57fe5b60209081029290920135600160a060020a0316835250810191909152604001600020805460ff1916911515919091179055600101610281565b505050565b600054600160a060020a031681565b60026020526000908152604090205460ff1681565b600154600160a060020a031681565b60005433600160a060020a0390811691161461032757600080fd5b600160a060020a03166000908152600260205260409020805460ff19166001179055565b60005433600160a060020a0390811691161461036657600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a72305820056f50a5907a22b60c6a00fe3f65d993bb7cae48c4b5fbef1db40136e0c4d2b80029"
    },
    "PrivatePreSale.sol:Ownable" : 
    {
      "abi" : "[{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"}]",
      "bin" : "6060604052341561000f57600080fd5b60008054600160a060020a033316600160a060020a03199091161790556101768061003b6000396000f30060606040526004361061004b5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416638da5cb5b8114610050578063f2fde38b1461007f575b600080fd5b341561005b57600080fd5b6100636100a0565b604051600160a060020a03909116815260200160405180910390f35b341561008a57600080fd5b61009e600160a060020a03600435166100af565b005b600054600160a060020a031681565b60005433600160a060020a039081169116146100ca57600080fd5b600160a060020a03811615156100df57600080fd5b600054600160a060020a0380831691167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a7230582091024f8569759f522a2fc16aed169b01ac2678b5998cca080068cb4ba091d2330029"
    },
    "PrivatePreSale.sol:Pausable" : 
    {
      "abi" : "[{\"constant\":false,\"inputs\":[],\"name\":\"unpause\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"claimOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"paused\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"pause\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"pendingOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"Pause\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"Unpause\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"}]",
      "bin" : "60606040526001805460a060020a60ff021916905560008054600160a060020a033316600160a060020a03199091161790556103c3806100406000396000f3006060604052600436106100825763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416633f4ba83a81146100875780634e71e0c81461009c5780635c975abb146100af5780638456cb59146100d65780638da5cb5b146100e9578063e30c397814610118578063f2fde38b1461012b575b600080fd5b341561009257600080fd5b61009a61014a565b005b34156100a757600080fd5b61009a6101da565b34156100ba57600080fd5b6100c2610268565b604051901515815260200160405180910390f35b34156100e157600080fd5b61009a610289565b34156100f457600080fd5b6100fc61032f565b604051600160a060020a03909116815260200160405180910390f35b341561012357600080fd5b6100fc61033e565b341561013657600080fd5b61009a600160a060020a036004351661034d565b60005433600160a060020a0390811691161461016557600080fd5b60015474010000000000000000000000000000000000000000900460ff16151561018e57600080fd5b6001805474ff0000000000000000000000000000000000000000191690557f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b60015433600160a060020a039081169116146101f557600080fd5b600154600054600160a060020a0391821691167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3600180546000805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a03841617909155169055565b60015474010000000000000000000000000000000000000000900460ff1681565b60005433600160a060020a039081169116146102a457600080fd5b60015474010000000000000000000000000000000000000000900460ff16156102cc57600080fd5b6001805474ff00000000000000000000000000000000000000001916740100000000000000000000000000000000000000001790557f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b600054600160a060020a031681565b600154600160a060020a031681565b60005433600160a060020a0390811691161461036857600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a723058203ae0e90c02428ae84038bba3660c79ed7da4b90a7be5a8c922ce45726ed3a3e00029"
    },
    "PrivatePreSale.sol:PrivatePreSale" : 
    {
      "abi" : "[{\"constant\":true,\"inputs\":[],\"name\":\"TOKEN_ADDRESS\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"START_DATE\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"unpause\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"weiRaised\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"claimOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"capReached\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"closed\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"paused\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"FUNDS_WALLET\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"MIN_TOKEN_INVEST\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"tokensIssued\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"TOKEN\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"pause\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_beneficiary\",\"type\":\"address\"}],\"name\":\"removeFromWhitelist\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"TOKEN_WALLET\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_beneficiaries\",\"type\":\"address[]\"}],\"name\":\"addManyToWhitelist\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"whitelist\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"TOKENS_PER_ETH\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_weiAmount\",\"type\":\"uint256\"}],\"name\":\"getTokenAmount\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"pendingOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_beneficiary\",\"type\":\"address\"}],\"name\":\"addToWhitelist\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"closeSale\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"MAX_TOKENS\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"fallback\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"purchaser\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"beneficiary\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"TokenPurchase\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"Pause\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"Unpause\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"}]",
      "bin" : "60606040526003805460ff19169055635ad18633600455341561002157600080fd5b60008054600160a060020a03191633600160a060020a0316179055610a1e8061004b6000396000f3006060604052600436106101485763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630bdf53008114610153578063372c6533146101825780633f4ba83a146101a75780634042b66f146101ba5780634e71e0c8146101cd5780634f935945146101e0578063597e1fb5146102075780635c975abb1461021a57806369b6438e1461022d5780637365babe146102405780637c48bbda1461025357806382bfefc8146101535780638456cb59146102665780638ab1d681146102795780638ada1957146102985780638c10671c146102ab5780638da5cb5b146102c95780639b19251a146102dc578063bc6e6604146102fb578063c2507ac11461030e578063e30c397814610324578063e43252d714610337578063ee55efee14610356578063f2fde38b14610369578063f47c84c514610388575b6101513361039b565b005b341561015e57600080fd5b610166610536565b604051600160a060020a03909116815260200160405180910390f35b341561018d57600080fd5b61019561054e565b60405190815260200160405180910390f35b34156101b257600080fd5b610151610554565b34156101c557600080fd5b6101956105b8565b34156101d857600080fd5b6101516105be565b34156101eb57600080fd5b6101f361064c565b604051901515815260200160405180910390f35b341561021257600080fd5b6101f3610661565b341561022557600080fd5b6101f361066a565b341561023857600080fd5b610166610673565b341561024b57600080fd5b61019561068b565b341561025e57600080fd5b610195610699565b341561027157600080fd5b61015161069f565b341561028457600080fd5b610151600160a060020a0360043516610705565b34156102a357600080fd5b610166610741565b34156102b657600080fd5b6101516004803560248101910135610759565b34156102d457600080fd5b6101666107d1565b34156102e757600080fd5b6101f3600160a060020a03600435166107e0565b341561030657600080fd5b6101956107f5565b341561031957600080fd5b6101956004356107fc565b341561032f57600080fd5b610166610817565b341561034257600080fd5b610151600160a060020a0360043516610826565b341561036157600080fd5b610151610865565b341561037457600080fd5b610151600160a060020a036004351661089f565b341561039357600080fd5b6101956108e9565b600354600090819060ff16156103b057600080fd5b3491506103bc826107fc565b90506103c98383836108f8565b6006546103dc908263ffffffff61098316565b6006556005546103f2908363ffffffff61098316565b6005557344c776a7d3eb990be59458a3488066f2dc12492e6323b872dd73a11aae29840fbb5c86e6fd4cf809eba183aef43385846040517c010000000000000000000000000000000000000000000000000000000063ffffffff8616028152600160a060020a0393841660048201529190921660248201526044810191909152606401602060405180830381600087803b151561048e57600080fd5b5af1151561049b57600080fd5b50505060405180515073a22ab8a9d641ce77e06d98b7d7065d324d3d697690503480156108fc0290604051600060405180830381858888f1935050505015156104e357600080fd5b82600160a060020a031633600160a060020a03167f623b3804fa71d67900d064613da8f94b9617215ee90799290593e1745087ad18848460405191825260208201526040908101905180910390a3505050565b7344c776a7d3eb990be59458a3488066f2dc12492e81565b60045481565b60005433600160a060020a0390811691161461056f57600080fd5b60035460ff16151561058057600080fd5b6003805460ff191690557f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b60055481565b60015433600160a060020a039081169116146105d957600080fd5b600154600054600160a060020a0391821691167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3600180546000805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a03841617909155169055565b6006546a034f086f3b33b68400000090101590565b60075460ff1681565b60035460ff1681565b73a22ab8a9d641ce77e06d98b7d7065d324d3d697681565b693f870857a3e0e380000081565b60065481565b60005433600160a060020a039081169116146106ba57600080fd5b60035460ff16156106ca57600080fd5b6003805460ff191660011790557f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b60005433600160a060020a0390811691161461072057600080fd5b600160a060020a03166000908152600260205260409020805460ff19169055565b73a11aae29840fbb5c86e6fd4cf809eba183aef43381565b6000805433600160a060020a0390811691161461077557600080fd5b5060005b818110156107cc5760016002600085858581811061079357fe5b60209081029290920135600160a060020a0316835250810191909152604001600020805460ff1916911515919091179055600101610779565b505050565b600054600160a060020a031681565b60026020526000908152604090205460ff1681565b620186a081565b600061081182620186a063ffffffff61099d16565b92915050565b600154600160a060020a031681565b60005433600160a060020a0390811691161461084157600080fd5b600160a060020a03166000908152600260205260409020805460ff19166001179055565b60005433600160a060020a0390811691161461088057600080fd5b60075460ff161561089057600080fd5b6007805460ff19166001179055565b60005433600160a060020a039081169116146108ba57600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b6a034f086f3b33b68400000081565b600160a060020a038316151561090d57600080fd5b81151561091957600080fd5b60045442101561092857600080fd5b60075460ff161561093857600080fd5b610941836109c8565b693f870857a3e0e380000081101561095857600080fd5b6006546a034f086f3b33b68400000090610978908363ffffffff61098316565b11156107cc57600080fd5b60008282018381101561099257fe5b8091505b5092915050565b6000808315156109b05760009150610996565b508282028284828115156109c057fe5b041461099257fe5b600160a060020a03811660009081526002602052604090205460ff1615156109ef57600080fd5b505600a165627a7a72305820fa3cccf1b4bfff9691d66a175d5bf60aab421f5605fb0cde746904cf7575b3f00029"
    },
    "PrivatePreSale.sol:SafeMath" : 
    {
      "abi" : "[]",
      "bin" : "604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146060604052600080fd00a165627a7a72305820fff7b39b4299e3d9ba4dca1c451f3e4fb0c935823da412a792c7f0df33dd80d60029"
    }
  },
  "version" : "0.4.21+commit.dfe3193c.Darwin.appleclang"
};
